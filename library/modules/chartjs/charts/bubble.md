---
title: Bubble Chart | Chart.js Module
hide_title: true
---

# Bubble Chart Example

## Basic

<div className="ndl-image-with-background l">

![](/library/modules/chartjs/charts/bubble-chart.png)

</div>

```js
Outputs.Data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Dataset 1",
            data: [
                { x: 6.64266118, y: 17.53858025, r: 9.3146433470507550 },
                { x: 96.5149177, y: 11.62894376, r: 7.6109825102880660 },
                { x: 76.4077503, y: 26.60408093, r: 11.861539780521262 },
                { x: 58.6668381, y: 93.32818930, r: 6.2947102194787380 },
                { x: 63.0452674, y: 61.18398491, r: 9.2129629629629620 },
                { x: 61.1479766, y: 9.183813440, r: 11.881730109739369 },
                { x: 87.5428669, y: 23.74742798, r: 14.084962277091908 }
            ],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)"
        },
        {
            label: "Dataset 2",
            data: [
                { x: 13.47350823, y: 60.22333676, r: 10.254929698216735 },
                { x: 18.52066187, y: 81.83427641, r: 13.214334705075446 },
                { x: 18.52666324, y: 36.67566872, r: 8.6403034979423870 },
                { x: 88.80015432, y: 63.01911866, r: 5.5760459533607690 },
                { x: 89.83496228, y: 62.09919410, r: 14.916623799725650 },
                { x: 78.42121056, y: 75.89120370, r: 11.631172839506174 },
                { x: 85.42309671, y: 31.55564129, r: 13.651791838134430 }
            ],
            borderColor: "rgb(255, 159, 64)",
            backgroundColor: "rgba(255, 99, 132, 0.5)"
        }
    ]
}
```
