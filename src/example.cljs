(ns example
  (:require [replicant.dom :as r]))

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
     [:br]
     [:button {:on {:click [[:state/assoc-in [:alert] nil]
                            [:state/assoc-in [:alert] {:content "Alert!"
                                                       :remove  [[:state/assoc-in [:alert] nil]]}]]}}
      "Click me"]
     [:p "State:"]
     [:pre (str data)]]))

(def store (atom {}))

(defn render []
  (r/render (js/document.getElementById "app")
            (page store)))

(defn dispatch [_ events]
  (doseq [[kind & args] events]
    (case kind
      :state/assoc-in (swap! store assoc-in (first args) (second args)))))

(defn init! [store]
  (r/set-dispatch! dispatch)
  (add-watch store :render #(render))
  (render))

(init! store)


