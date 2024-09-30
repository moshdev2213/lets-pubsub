import Toaster from './utils/Toaster'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import gcr from './assets/gcr.png'
import gpubsub from './assets/gpubsub.png'
import './App.css'
import PublisherService from './services/PublisherService'
import { AxiosResponse } from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const publishMessage = async () => {
    try {
      setLoading(true)
      Toaster.loadingToast("Publishing Message .....")

      const result: AxiosResponse<any> = await PublisherService.publishMessage()
      if (result.data.success) {
        setCount(count + 1)
        Toaster.justToast('success', result.data.message, () => {
          Toaster.dismissLoadingToast()
        })
      }
    } catch (error) {
      // alert(error)
      console.error(error); // Log error to the console
      Toaster.justToast('error', 'Failed to publish message', () => {
        Toaster.dismissLoadingToast();
      });
    } finally {
      setLoading(false)
      Toaster.dismissLoadingToast()
    }
  }

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={gpubsub} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="" target="_blank">
          <img src={gcr} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h2>Google Pub/Sub</h2>
      <div className="card">
        <button onClick={publishMessage} disabled={loading}>
          {loading ? "Publishing..." : "Publish Message"}
        </button>
        <button disabled>
          Messages Sent : {count}
        </button>
      </div>
      <p className="read-the-docs">
        Created In Order To <a target='_blank' href="https://cloud.google.com/pubsub/docs/overview">Learn GCP PubSub</a> 
      </p>
      <p className="read-the-docs">
        made with ❤ <a target='_blank' href="https://github.com/moshdev2213">@moshdev2213</a>
      </p>
    </>
  )
}

export default App
