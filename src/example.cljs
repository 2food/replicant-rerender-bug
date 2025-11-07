(ns example
  (:require [cljs.pprint :as pprint]
            [replicant.dom :as r]))

(defn alert [{:keys [content remove] :as alert}]
  (when alert
    [:div
     {:replicant/key "alert"
      :style         {:position    "fixed"
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
     [:h3 "Bug A"]
     (alert (:alert data))
     [:br]
     [:button {:on {:click [[:state/assoc-in [:alert] nil]
                            [:state/assoc-in [:alert] {:content "Alert!"
                                                       :remove  [[:state/assoc-in [:alert] nil]]}]]}}
      "Click me"]
     [:p "State:"]
     [:pre (str (select-keys data [:alert]))]

     [:h3 "Bug B"]
     [:table
      [:tr [:th "id"] [:th "from"] [:th "diff"] [:th "to"]]
      (for [[id {:keys [from to]}] (sort-by (fn [[id {:keys [from]}]] [(parse-long from) id]) (:list data))]
        [:tr {:replicant/key id
              :style         {:margin 3}}
         [:td (subs (str id) 0 4) " "]
         [:td
          [:input {:type        "number"
                   :placeholder "from"
                   :value       from
                   :on          {:change [[:state/assoc-in [:list id :from] :event/value]]}}]]
         [:td (when (and from to) (- to from))]
         [:td
          [:input {:type        "number"
                   :placeholder "to"
                   :value       to
                   :on          {:change [[:state/assoc-in [:list id :to] :event/value]]}}]]])]
     [:p "State:"]
     [:pre (with-out-str
             (pprint/pprint (select-keys data [:list])))]]))

(def store (atom {:alert nil
                  :list  (hash-map (random-uuid) {:from "1" :to "1"}
                                   (random-uuid) {:from "2" :to "2"}
                                   (random-uuid) {:from "3" :to "3"})}))

(defn render []
  (r/render (js/document.getElementById "app")
            (page store)))

(defn dispatch [{:replicant/keys [js-event] :as r} events]
  (doseq [[kind & args] events]
    (case kind
      :state/assoc-in (swap! store assoc-in (first args) (if (= :event/value (second args))
                                                           (.-value (.-target js-event))
                                                           (second args))))))

(defn init! [store]
  (r/set-dispatch! dispatch)
  (add-watch store :render #(render))
  (render))

(init! store)


