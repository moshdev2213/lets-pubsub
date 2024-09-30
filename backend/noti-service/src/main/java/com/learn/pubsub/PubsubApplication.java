package com.learn.pubsub;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

// import com.google.cloud.ServiceOptions;
import com.google.cloud.pubsub.v1.Subscriber;
import com.google.pubsub.v1.ProjectSubscriptionName;

@SpringBootApplication
public class PubsubApplication {

	// Inject properties from application.properties
    @Value("${google.project-id}")
    private String projectId;

    @Value("${google.subscription-id}")
    private String subscriptionId;

	public static void main(String[] args) {
		SpringApplication.run(PubsubApplication.class, args);
	}

	@Bean
	public CommandLineRunner getCommandLineRunner() {
		return (args) -> {
			// String PROJECT_ID = ServiceOptions.getDefaultProjectId();
			ProjectSubscriptionName subscriptionName = ProjectSubscriptionName.of(projectId, subscriptionId);

			Subscriber subscriber = null;
			try {
				subscriber = Subscriber.newBuilder(subscriptionName.toString(), new MsgReceiver()).build();
				subscriber.startAsync().awaitRunning();
				subscriber.awaitTerminated();
			} catch (IllegalStateException e) {
				e.printStackTrace();
			} finally {
				if (subscriber != null) {
					subscriber.stopAsync();
				}
			}
		};
	}
}
