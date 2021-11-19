import React, { Component } from "react";
import "./App.css";
import { Route, Switch, HashRouter } from "react-router-dom";
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
      balanceAmount: null,
      owner: null,
      shop: null,
    };
    this.handleTransferAmount = this.handleTransferAmount.bind(this);
    this.handleDeposit = this.handleDeposit.bind(this);
  }

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

    //Load Smart Contract
    const wallet = new web3.eth.Contract(ABI, ADDRESS);
    this.setState({ wallet: wallet });
    console.log("WalletContract", wallet);

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
        this.setState({ loading: false });
        window.location.reload();
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
        this.setState({ loading: false });
        window.location.reload();
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
            <Route
              exact
              path="/communityconnect"
              component={CommunityConnect}
            />
            <Route exact path="/profile" component={ProfileMain} />
            <Route exact path="/affirmations" component={Affirmations} />
            <Route exact path="/breathing" component={BreathingExercise} />
            <Route exact path="/mindfulmedi" component={MindfulMeditation} />
            {!this.state.loading && (
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
            )}

            <Route exact path="/wall" component={Wall} />
            <Route exact path="/rewards" component={Rewards} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
