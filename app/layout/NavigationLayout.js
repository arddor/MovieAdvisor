import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

class NavigationLayout extends React.Component {
  render() {
    return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Movie Advisor</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/some">
            <NavItem eventKey={1}>Some Link</NavItem>
          </LinkContainer>
          <LinkContainer to="/someother">
            <NavItem eventKey={2}>Some other link</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
      <Grid>
        <Row>
          <Col xs={12}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    </div>
  );
  }
}

export default NavigationLayout;
