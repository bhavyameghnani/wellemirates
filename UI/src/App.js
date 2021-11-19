import React, { Component } from "react";
import "./App.css";
import { Route, Switch, HashRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import Home from "./Components/LandingPage/LandingPage";
import DeskExercise from "./Components/DeskExercise/DeskExercise";
import AskMeAnything from "./Components/AMA/AskMeAnything";
import Course from "./Components/Course/Course";
import Health from "./Components/HealthLanding/Health";
import CommunityConnect from "./Components/CommunityConnect/CommunityConnect";
import Meditation from "./Components/Meditation/Meditation";
import ProfileMain from "./Components/Profile/ProfileMain";
import Affirmations from "./Components/Affirmations/Affirmations";
import BreathingExercise from "./Components/Meditation/BreathingExercise";
import MindfulMeditation from "./Components/Meditation/MindfulMeditation";
import Rewards from "./Components/Rewards/Rewards";
import Wall from "./Components/Wall/Wall";
import Shop from "./Components/Shop/Shop";
import Web3 from "web3";
import { ABI, ADDRESS } from "./walletConfig";
import { T_ABI, T_ADDRESS } from "./taskListConfig";

//Declare IPFS
const IPFS = require("ipfs-api");
const ipfs = new IPFS({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      allAccounts: [],
      accountBalance: 0,
      loading: true,
      web3State: null,
      wallet: null,
      taskList: null,
      balanceAmount: null,
      owner: null,
      shop: null,
      open: false,
      receipt: null,
      taskCount: null,
      allTasks: [],
    };
    this.handleTransferAmount = this.handleTransferAmount.bind(this);
    this.handleDeposit = this.handleDeposit.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    //Initialise Web3 and get Network
    const web3 = new Web3("http://127.0.0.1:7545"); // new Web3(Web3.givenProvider || "http://localhost:8545")
    this.setState({ web3State: web3 });

    const network = await web3.eth.net.getNetworkType();
    console.log("network", network);

    //Fetch Accounts & Save it in React-state
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    this.setState({ allAccounts: accounts });
    console.log("accounts", accounts);

    //Get Balance of the current account
    var balance = await web3.eth.getBalance(this.state.account);
    balance = this.state.web3State.utils.fromWei(balance, "ether");
    this.setState({ accountBalance: balance });
    console.log("Owner's Balance", balance);

    //Load Wallet Smart Contract
    const wallet = new web3.eth.Contract(ABI, ADDRESS);
    this.setState({ wallet: wallet });
    console.log("WalletContract", wallet);

    //Load Task List Smart Contract
    const taskList = new web3.eth.Contract(T_ABI, T_ADDRESS);
    this.setState({ taskList: taskList });
    console.log("TaskListContract", taskList);

    //Get Main Owner Account from Blockchain by calling owner Function()
    const owner = await wallet.methods.owner().call();
    this.setState({ owner: owner });
    console.log("owner", owner);

    //Get Shop Owner Account from Blockchain
    const shop = this.state.allAccounts[1];
    this.setState({ shop: shop });
    console.log("shop", shop);

    //Get Balance of Account deposited in Smart Contract Blockchain by calling getBalance Function()
    var balanceAmount = await wallet.methods.getBalance().call();
    balanceAmount = this.state.web3State.utils.fromWei(balanceAmount, "ether");
    this.setState({
      balanceAmount: balanceAmount,
    });
    console.log("balanceAmount", balanceAmount);

    //Get Total number of Tasks from Task List Smart Contract Blockchain by calling taskCount Function()
    const taskCount = await taskList.methods.taskCount().call();
    this.setState({ taskCount: taskCount });
    console.log("taskCount", taskCount);

    //Get All Tasks by calling task function()
    for (var i = 1; i <= taskCount; i++) {
      var allTasks = await taskList.methods.tasks(i).call();
      this.setState({
        allTasks: [...this.state.allTasks, allTasks],
      });
    }
    console.log("All Tasks", this.state.allTasks);

    //Set the state:loading to false once we have loaded our Blockchain
    this.setState({ loading: false });
  }

  handleTransferAmount(address, amount) {
    console.log(amount);
    console.log("just wait... Transfering Amount Now");
    // this.setState({ loading: true });
    this.state.wallet.methods
      .transfer(address, amount)
      .send({
        from: this.state.owner,
        // value: amount,
        gas: 3000000,
      })
      .once("receipt", (receipt) => {
        console.log(receipt);
        // window.location.reload();

        this.setState({
          loading: false,
          receipt: receipt,
          open: true,
        });
      });
  }

  handleDeposit() {
    console.log("just wait... Deposit Amount Now");
    this.setState({ loading: true });
    this.state.wallet.methods
      .deposit()
      .send({
        from: this.state.owner,
        value: this.state.web3State.utils.toWei("10", "ether"),
        gas: 3000000,
      })
      .once("receipt", (receipt) => {
        console.log(receipt);
        this.setState({ loading: false });
        window.location.reload();
      });
  }

  //Get Image
  captureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);

    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
      console.log("buffer", this.state.buffer);
    };
  };

  createTask(content, task, price) {
    console.log(content, task, price);
    console.log("just wait...creating task now");
    ipfs.add(this.state.buffer, (e, data) => {
      // add on blockchain
      if (e) {
        console.error(e);
        return;
      }
      console.log(data);
      console.log(this.state.taskList);
      this.setState({ loading: true });

      this.state.taskList.methods
        .createTask(content, task, data[0].hash, parseInt(price))
        .send({ from: this.state.account, gas: 3000000 })
        .once("receipt", (receipt) => {
          this.setState({
            loading: false,
            receipt: receipt,
            open: true,
          });
        });
    });
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/deskexercise" component={DeskExercise} />
            <Route exact path="/askmeanything" component={AskMeAnything} />
            <Route exact path="/course" component={Course} />
            <Route exact path="/health" component={Health} />
            <Route exact path="/meditation" component={Meditation} />
            <Route exact path="/profile" component={ProfileMain} />
            <Route exact path="/affirmations" component={Affirmations} />
            <Route exact path="/breathing" component={BreathingExercise} />
            <Route exact path="/mindfulmedi" component={MindfulMeditation} />
            <Route exact path="/wall" component={Wall} />
            <Route exact path="/rewards" component={Rewards} />
            {!this.state.loading && (
              <>
                <Route
                  exact
                  path="/shop"
                  render={() => (
                    <Shop
                      balance={this.state.balanceAmount}
                      shop={this.state.shop}
                      handleTransferAmount={this.handleTransferAmount}
                      handleDeposit={this.handleDeposit}
                    />
                  )}
                />
                <Route
                  exact
                  path="/communityconnect"
                  render={() => (
                    <CommunityConnect
                      captureFile={this.captureFile}
                      createTask={this.createTask}
                      allTasks={this.state.allTasks}
                    />
                  )}
                />
              </>
            )}
          </Switch>
        </HashRouter>

        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          maxWidth="lg"
          onClose={this.handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            <b>Transaction Successful : Please find the receit below.</b>
          </DialogTitle>
          <DialogContent>
            {this.state.receipt && (
              <>
                <Typography gutterBottom variant="h6">
                  <b>Transaction Hash:</b>
                  {this.state.receipt.transactionHash}
                </Typography>
                <Typography gutterBottom variant="h6">
                  <b>Block Hash:</b> {this.state.receipt.blockHash}
                </Typography>
                <Typography gutterBottom variant="h6">
                  <b>Block Number:</b> {this.state.receipt.blockNumber}
                </Typography>
                <Typography gutterBottom variant="h6">
                  <b>Sender Address:</b> {this.state.receipt.to}
                </Typography>
                <Typography gutterBottom variant="h6">
                  <b>Recepient Address:</b> {this.state.receipt.from}
                </Typography>
                <Typography gutterBottom variant="h6">
                  <b>Gas used in Transaction:</b> {this.state.receipt.gasUsed}
                </Typography>
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Download</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default App;
