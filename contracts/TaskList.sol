pragma solidity ^0.5.0;

contract TaskList {
  uint public taskCount = 0;

  struct Task {
    uint id;
    string content;
    string statement;
    bool completed;
    string imageLocation;
    uint price;
    address owner;
  }

  mapping(uint => Task) public tasks;

  event TaskCreated(
    uint id,
    string content,
    string statement,
    bool completed,
    string imageLocation,
    uint price,
    address owner
    
  );

  event TaskCompleted(
    uint id,
    bool completed
  );

  constructor() public {
    createTask("Congratulations on completing the very first task that is Installing our application.", "First Task", "https://t3.ftcdn.net/jpg/02/80/01/64/360_F_280016442_I5DcWCRT7JTr5Ut86a9VvqNoOfDt854G.jpg", 10);
  }

  function createTask(string memory _content, string memory _statement, string memory _imageLocation, uint _price) public {
      address _owner = msg.sender;
    taskCount ++;
    tasks[taskCount] = Task(taskCount, _content, _statement, false, _imageLocation, _price, _owner);
    emit TaskCreated(taskCount, _content, _statement, false, _imageLocation, _price, _owner);
  }

  function toggleCompleted(uint _id) public {
    Task memory _task = tasks[_id];
    _task.completed = !_task.completed;
    tasks[_id] = _task;
    emit TaskCompleted(_id, _task.completed);
  }

}
