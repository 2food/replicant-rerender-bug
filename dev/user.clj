(ns user
  (:require [shadow.cljs.devtools.server :as shadow-server]
            [shadow.cljs.devtools.api :as shadow]))

(defn start-dev! []
  (shadow-server/start!)
  (shadow/dev :app))

(comment
  (start-dev!)

  (shadow-server/stop!)
  )