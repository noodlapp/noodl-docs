---
title: Doughnut Chart | Chart.js Module
hide_title: true
---

# Doughnut Chart Example

## Basic

<div className="ndl-image-with-background l">

![](/library/modules/chartjs/charts/doughnut-chart.png)

</div>

```js
Outputs.Data = {
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
    datasets: [
        {
            label: "Dataset 1",
            data: [96.79955418, 80.80761317, 36.31772977, 64.56447188, 7.52314815],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
                "rgba(255, 99, 132, 0.5)",
                "rgba(255, 99, 132, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(54, 162, 235, 0.5)"
            ]
        }
    ]
}
```
