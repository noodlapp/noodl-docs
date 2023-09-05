---
hide_title: true
hide_table_of_contents: true
title: Run Tasks
---

<##head##>

# Run Tasks

This node can be used to perform a set of tasks comprised of a logic component for each item in an <span className="ndl-data">array</span>. These tasks can be perfomed in a parallel or waterfall fashion. You start running the tasks by sending a signal to the **Do** input of the **Run Tasks** node.

<div className="ndl-image-with-background xl">

![](/nodes/data/run-tasks/run-tasks-1.png)

</div>

The <span className="ndl-node">Run Tasks</span> node needs a task component that it will "run" for each item in the array connected to **Items**. These tasks are logic components that are started with the **Do** signal and that need to complete with a signal either to **Success** or **Failure**.

<div className="ndl-image-with-background xl">

![](/nodes/data/run-tasks/run-tasks-2.png)

</div>

<##head##>

You can control the behaviour of how the tasks are run with the properties.

<div className="ndl-image-with-background l">

![](/nodes/data/run-tasks/run-tasks-props.png)

</div>

* **Stop On Failure** Indicates wether the run tasks node should stop on the first task that signals a **Failure**. This will result in the **Failure** signal and **Aborted** signal emitted from the **Run Tasks** node.

* **Max Running Tasks** Specifies the maximum number of tasks that will run at the same time. If you want each task to be performed in order and wait for a task to be completed before starting a new you set this value to **1**. When running tasks in parallel which is often the case then you may want to limit the number of tasks running concurrently.

* **Template** This is the logic component that will be used to run each task.

**Run Tasks** work a lot like the [Repeater](/nodes/ui-controls/repeater) node where each task instance can access the data from the corresponding item in the array using an [Object](/nodes/data/object/object-node) or [Record](/nodes/data/cloud-data/record) node.

<div className="ndl-image-with-background xl">

![](/nodes/data/run-tasks/run-tasks-4.png)

</div>

As with the **Repeater** you need to specify that the **Id** of the object should be obtained from the repeater, in this case the **Run Tasks** is the repeater and the object will be the item on the array corresponing to this task component instance.

<div className="ndl-image-with-background l">

![](/nodes/data/run-tasks/run-tasks-3.png)

</div>

However the properties of the object corresponding to that task will also be available as **Component Inputs** directly. So a quicker way might be to just add corresponding inputs.

<div className="ndl-image-with-background xl">

![](/nodes/data/run-tasks/run-tasks-5.png)

</div>

## Inputs

| Data                                            | Description                                                                                                                                                                                                                                                                            |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Template</span> | This is a reference to a component that will be cloned for each item in the **Items** array and used to run the task for that item. |
| <span className="ndl-data">Stop On Failure</span>        | Indicates wether the run tasks node should stop on the first task that signals a <span className="ndl-signal">Failure</span>. This will result in the <span className="ndl-signal">Failure</span> signal and <span className="ndl-signal">Aborted</span> signal emitted from the **Run Tasks** node.                                                                  |
| <span className="ndl-data">Max Running Tasks</span>     | Specifies the maximum number of tasks that will run at the same time. If you want each task to be performed in order and wait for a task to be completed before starting a new you set this value to **1**. When running tasks in parallel which is often the case then you may want to limit the number of tasks running concurrently.                                                                         |
| <span className="ndl-data">Items</span>         | An array of objects. The run tasks will create a task component instance for each item in the array that may run a task.                                                                                                      |

| Signal                                      | Description                                                                                                                       |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | Send a signal on this input to start running the tasks. |
| <span className="ndl-signal">Abort</span> | Sending a signal on this input will abort the running of tasks, when the currently running tasks are completed no new tasks will be started. |


## Outputs

| Signal                                      | Description                                                                                                                       |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | A signal will be emitted on this output when all tasks have completed successfully. |
| <span className="ndl-signal">Failure</span> | A signal will be emitted here when the tasks have completed running and a task failed. |
| <span className="ndl-signal">Aborted</span> | A signal here indicated that the running of tasks was aborted eihter due to a signal on the <span className="ndl-signal">Abort</span> input or that a task failed and the running of tasks was stopped. |
| <span className="ndl-signal">Done</span> | A signal is emitted here when all tasks have been completed, failed and succeeded. |
