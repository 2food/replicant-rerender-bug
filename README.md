Steps to reproduce

1. Start a repl with `clj -A:dev`
2. Call `(user/start-dev!)`
3. go to localhost:8000 in your browser
4. Click the button many times quickly.

The bug manifests as three "symptoms"
1. The content of the last html element is "swapped" into dom elements before it.
2. A console warning about rerendering while a render is ongoing from replicant.
3. An unresponsive ui.

https://github.com/user-attachments/assets/729372f2-82d2-48b1-b3b7-26cb1a6f57ff

There are two additional clues to the issue here: 
1. Removing `:replicant/unmounting` from the alert makes the bug go away (but also removes the transition of course).
2. Wrapping the `(alert (:alert data))` with a `:div` fixes the bug.

