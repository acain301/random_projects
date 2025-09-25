use k8s_openapi::api::core::v1::{Container, Pod, PodSpec};
use kube::api::{ObjectMeta, PostParams};
use kube::{api::ListParams, Api, Client, Config};
use std::collections::BTreeMap;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize,Debug)]
struct PodPatch {
    metadata: PodMetadataPatch,
}

#[derive(Serialize, Deserialize,Debug)]
struct PodMetadataPatch {
    labels: std::collections::BTreeMap<String, String>,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::try_default().await?;

    let pods: Api<Pod> = Api::default_namespaced(client);

    let mut labels = BTreeMap::new();
    labels.insert("app".to_string(), "test".to_string());

    let pod = Pod {
        metadata: ObjectMeta {
            labels: Some(labels),
            name: Some("soup".to_string()),
            ..Default::default()
        },
        spec: Some(PodSpec {
            containers: vec![Container {
                name: "pong-container".to_string(),
                image: Some("ghcr.io/s1ntaxe770r/pong".to_string()),
                ..Default::default()
            }],
            ..Default::default()
        }),
        ..Default::default()
    };

    let pod = pods.create(&PostParams::default(), &pod).await;

    let list_params = ListParams::default().labels("app=test");


    for pod in pods.list(&list_params).await? {
        println!("Found Pod {:?}", pod.metadata.name.unwrap())
    }

    match pod {
        Ok(pod) => {
            println!("created pod {}", pod.metadata.name.unwrap());
        }
        Err(e) => {
            println!("unable to create pod {}", e)
        }
    }
    Ok(())
}

