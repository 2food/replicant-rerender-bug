(ns user
  (:require [shadow.cljs.devtools.server :as shadow-server]
            [shadow.cljs.devtools.api :as shadow]))



(comment
  (shadow-server/start!)

  (shadow/dev :app)

  (shadow-server/stop!)
  )