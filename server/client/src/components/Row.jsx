import React, { Component } from 'react';
import {
  GridList,
  RaisedButton,
  GridTile,
  Paper,
  Divider,
  Dialog,
  FlatButton
} from 'material-ui';

const styles = {
  // Defining styles for Grid List
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto'
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)'
  }
};

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Defining and initialising local component states
      open: false,
      obj: ''
    };
  }

  handleOpen(ob) {
    // updating states
    this.setState({ open: true });
    this.setState({ obj: ob });
  }

  handleClose = () => {
    this.setState({ open: false });
    this.setState({ obj: '' });
  };

  render() {
    const actions = [
      // Defining elements to be passed as children to Dialog component
      <FlatButton
        label="Cancel"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <Paper zDepth={3} style={{ background: '#9896A4' }}>
          <RaisedButton secondary={true} style={{ margin: '4' }}>
            {/* Using props passed to this component */}
            <b>{this.props.category.name}</b>
          </RaisedButton>
          <div style={styles.root}>
            <GridList style={styles.gridList} cols={2.2}>
              {/* Mapping and returning the array of obj models as grid list */}
              {this.props.category.entities.map(tile => (
                <GridTile
                  key={tile.name}
                  title={tile.name}
                  onClick={() => this.handleOpen(tile.obj)}
                  titleStyle={styles.titleStyle}
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                  <img
                    src={tile.thumb}
                    style={{ borderStyle: 'groove' }}
                    alt=""
                  />
                </GridTile>
              ))}
            </GridList>
          </div>
          <br />
          <br />
          <Divider />
        </Paper>
        <Dialog
          title="3D Visual"
          titleStyle={{ textAlign: 'center' }}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div style={{ marginLeft: '22%' }}>
            {/* returning one grid tile containing one 3d obj model */}
            <model-obj src={this.state.obj} />
          </div>
        </Dialog>
      </div>
    );
  }
}

// exporting the component
export default Row;
