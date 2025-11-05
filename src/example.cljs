(ns example
  (:require [clojure.pprint :as pprint]
            [nexus.registry :as nxr]
            [nexus.strategies :as strategies]
            [replicant.dom :as r]))

(defn alert [{:keys [content remove] :as alert}]
  (when alert
    [:div
     {:replicant/key "alert"
      :style {:position    "fixed"
              :top         "5rem"
              :right       "5%"
              :margin-left "5%"
              :max-width   "45%"
              :max-height  "45%"
              :transition  "opacity 0.5s ease-out, transform 0.3s ease-out"}

      :replicant/mounting
      {:style {:transform "translateX(100%)"}}
      :replicant/unmounting
      {:style {:opacity   0
               :transform "translateX(100%)"}}}
     [:div
      [:button {:on {:click remove}}
       "Remove"]
      [:div content]]]))

(defn page [store]
  (let [data @store]
    [:div
     (alert (:alert data))
     (map (fn [text] [:span text " "]) ["list" "of" "things"])
     [:br]
     [:button {:on {:click [[:state/assoc-in [:alert] nil]
                            [:state/assoc-in [:alert] {:content "Alert!"
                                                       :remove  [[:state/assoc-in [:alert] nil]]}]]}}
      "Click me"]
     [:pre (str data)]]))

(def store (atom {}))

(defn render []
  (r/render (js/document.getElementById "app")
            (page store)))

(nxr/register-system->state! (fn [store] @store))

(nxr/register-interceptor! strategies/fail-fast)

(def exception-logger
  {:id :exception-logger
   :after-effect
   (fn [{:keys [effect errors] :as ctx}]
     (when (seq errors)
       (println "⚠️  Errors while handling" (pr-str effect) ":")
       (pprint/pprint errors))
     ctx)})

(nxr/register-interceptor! exception-logger)

(nxr/register-effect! :state/assoc-in (fn [_ store path val] (swap! store assoc-in path val)))

(defn init! [store]
  (r/set-dispatch! #(nxr/dispatch store %1 %2))
  (add-watch store :render #(render))
  (render))

(init! store)


