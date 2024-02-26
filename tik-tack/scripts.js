class CheckboxGroup {
  constructor(margin = 0) {
    this.group = document.createElement("div");
    this.group.style.magrinLeft = `${margin}px`;
    this.isGroupTicked = false;
    this.leftMargin = margin;
  }
  handleGroupClick(e) {
    let element = e.target;
    var parentNode = element.parentNode;

    console.log("parentNode", parentNode, element.value);
    var divs = [...parentNode.getElementsByTagName("div")];

    divs.forEach((div) => {
      div.getElementsByTagName("input")[0].checked = e.target.checked;
    });
    console.log();
  }
  renderTask(tasks, parent = this.group) {
    tasks.forEach((task) => {
      let a = new Checlbox(task.label, this.leftMargin);
      parent.append(a);
      if (task.subTasks.length) {
        let group = new CheckboxGroup(this.leftMargin + 10);
        a.addEventListener("click", this.handleGroupClick);
        group.renderTask(task.subTasks, a);
      }
    });

    let wrapper = document.getElementById("wrapper");
    wrapper.append(this.group);
  }
}

class Checlbox {
  constructor(label, margin) {
    this.checkbox = document.createElement("input");
    this.checkbox.setAttribute("type", "checkbox");
    this.div = document.createElement("div");
    this.div.style.paddingLeft = `${margin}px`;
    this.div.innerHTML = label;
    this.div.append(this.checkbox);
    return this.div;
  }
}

let tasks = [
  {
    label: "task1",
    subTasks: [
      { label: "t1", subTasks: [] },
      { label: "t2", subTasks: [] },
      { label: "t3", subTasks: [] },
      {
        label: "t4",
        subTasks: [
          { label: "p1", subTasks: [] },
          { label: "p2", subTasks: [] },
          { label: "p3", subTasks: [] },
          {
            label: "p4",
            subTasks: [
              { label: "p1", subTasks: [] },
              { label: "p2", subTasks: [] },
              { label: "p3", subTasks: [] },
              { label: "p4", subTasks: [] },
            ],
          },
        ],
      },
    ],
  },
  { label: "tas2", subTasks: [] },
  {
    label: "task3",
    subTasks: [
      { label: "p1", subTasks: [] },
      { label: "p2", subTasks: [] },
      {
        label: "p3",
        subTasks: [
          { label: "p1", subTasks: [] },
          { label: "p2", subTasks: [] },
          { label: "p3", subTasks: [] },
          { label: "p4", subTasks: [] },
        ],
      },
      { label: "p4", subTasks: [] },
    ],
  },
  {
    label: "task4",
    subTasks: [
      { label: "p1", subTasks: [] },
      { label: "p2", subTasks: [] },
      { label: "p3", subTasks: [] },
      { label: "p4", subTasks: [] },
    ],
  },
];

let group = new CheckboxGroup();
group.renderTask(tasks);
