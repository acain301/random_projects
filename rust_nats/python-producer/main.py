import subprocess

print("Starting Rust-based notification generator...")

process = subprocess.Popen(["./rust-notifier/target/release/rust_notifier"])
process.wait()

print("Rust process finished.")

