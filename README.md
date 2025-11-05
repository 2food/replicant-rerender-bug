Steps to reproduce

1. Start a repl with `clj -A:dev`
2. Call `(user/start-dev!)`
3. go to localhost:8000 in you browser
4. Click the button quickly enough times.

The bug manifests as three "symptoms"
1. Bottom html content is "swapped" into dom elements before
2. A warning in the console from replicant
3. An unresponsive ui

https://github.com/user-attachments/assets/729372f2-82d2-48b1-b3b7-26cb1a6f57ff

There are two additional clues to the issue here: 
1. Removing `:replicant/unmounting` from the alert makes the bug go away (but also removes the transition of course).
2. Wrapping the `(alert (:alert data))` with a `:div` makes fixes the bug.

The last part makes me think that it has something to do with how replicant handles `nil` elements in the dom. 
