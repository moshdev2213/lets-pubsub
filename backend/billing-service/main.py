from google.cloud import pubsub_v1
from fastapi import FastAPI
from dotenv import load_dotenv
import os
import threading

# Load environment variables from .env file
load_dotenv()

app = FastAPI()

subscription_name = 'projects/{project_id}/subscriptions/{sub}'.format(
    project_id = os.getenv("PROJECT_ID"),
    sub  = os.getenv("SUBSCRIPTION_NAME")
)

subscriber = pubsub_v1.SubscriberClient()

def callback(message):
    print(f"Received message: {message.data.decode('utf-8')}")
    message.ack()

def start_pubsub_listener():
    try:
        future = subscriber.subscribe(subscription_name, callback)
        print(f"Billing service listening to {subscription_name}")
        future.result()  # Keeps the listener alive
    except Exception as e:
        print(f"An error occurred: {e}")
        future.cancel()  # Stops the subscriber if an error occurs
    
@app.on_event("startup")
def start_pubsub():
    threading.Thread(target=start_pubsub_listener, daemon=True).start()

@app.get("/")
async def server_status():
    return {"message": "Billing Service Subscriber Online"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app,host="0.0.0.0",port=8080)