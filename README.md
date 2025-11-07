Steps to setup example page:
1. Start a repl with `clj -A:dev`
2. Call `(user/start-dev!)`
3. go to localhost:8000 in your browser
   
# Bug A
Reproduce the bug by:
- Clicking the button many times quickly.

https://github.com/user-attachments/assets/729372f2-82d2-48b1-b3b7-26cb1a6f57ff

The bug manifests as three "symptoms"
1. The content of the last html element is "swapped" into dom elements before it.
2. A console warning about rerendering while a render is ongoing from replicant.
3. An unresponsive ui.

There are two additional clues to the issue here: 
1. Removing `:replicant/unmounting` from the alert makes the bug go away (but also removes the transition of course).
2. Wrapping the `(alert (:alert data))` with a `:div` fixes the bug.

# Bug B
The table rows are sorted by their "from" value. 

Reproduce the bug by:
 - Moving a row down and up two times by altering the "from" value.

https://github.com/user-attachments/assets/5b0d5fca-7aa3-4252-b0f1-ad72843ba52b

It seems like there's something about the reordering of elements that confuses replicant. In my real-world app it actually causes a crash when attempting further reorders (probably because of more complex nesting of elements), but I was unable to reproduce the crash in this example.
