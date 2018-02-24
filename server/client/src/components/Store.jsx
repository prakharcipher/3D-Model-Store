import React, { Component } from 'react';
import { connect } from 'react-redux'; // importing connect library from react redux
import { fetchCategories } from '../actions';
import Row from './Row'; // importing Row component
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

class Store extends Component {
  constructor(props) {
    super(props);

    this.handleShowMore = this.handleShowMore.bind(this); // binding the function to it's context

    this.state = {
      showItems: 2,
      open: false
    };
  }
  componentDidMount() {
    this.props.fetchCategories(); // calling the fetchCategories function when the component has mounted
  }

  handleShowMore() {
    // conditionally rendering the Snackbar
    if (this.state.showItems === this.props.categories.length) {
      this.setState({ open: true });
    } else {
      // Load more pagination logic
      this.setState({
        showItems:
          this.state.showItems >= this.props.categories.length
            ? this.state.showItems
            : this.state.showItems + 1
      });
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    // breaking down the 3d model array into smaller chunks and mapping it
    const items = this.props.categories
      .slice(0, this.state.showItems)
      .map((category, index) => (
        <div key={index}>
          <Row category={category} />
          <br />
          <br />
        </div>
      ));

    return (
      <div
        style={{
          height: '650px',
          overflowY: 'scroll',
          marginTop: '2%'
        }}
      >
        {items}
        {/* conditionally rendering the More button */}
        {this.props.categories !== 'undefined' &&
        this.props.categories.length > 0 ? (
          <div>
            <RaisedButton
              label="More"
              primary={true}
              onClick={this.handleShowMore}
              style={{ marginLeft: '47%' }}
            />
            <Snackbar
              open={this.state.open}
              message="No More Categories"
              autoHideDuration={3000}
              onRequestClose={this.handleRequestClose}
              style={{ textAlign: 'center' }}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // mapping state dispatched from redux store to props for this component
  return { categories: state.categories };
}

// connecting the props and dispatched function to the componentand exporting it
export default connect(mapStateToProps, { fetchCategories })(Store);
