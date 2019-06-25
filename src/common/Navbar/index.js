import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCog, faUser, faPowerOff, faLeaf, faTasks, faCheck, faArrowRight, faBell, faExclamationTriangle, faComment, faShoppingCart, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'

export default class Navbar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			navButtons: {
				notifications: false,
				user: false
			},

			notifications: {
				number: 0
			}
		}

		this.handleNavButtonClick = this.handleNavButtonClick.bind(this)
	}

	handleNavButtonClick(buttonName) {
		this.setState(state => ({
			navButtons: {
				[buttonName]: !state.navButtons[buttonName]
			}
		}))
	}

	render() {
		return (
			<div id="navbar" className="navbar navbar-default ace-save-state">
				<div className="navbar-container ace-save-state" id="navbar-container">
					<button type="button" className="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
						<span className="sr-only">Toggle sidebar</span>

						<span className="icon-bar"></span>

						<span className="icon-bar"></span>

						<span className="icon-bar"></span>
					</button>

					<div className="navbar-header pull-left">
						<a href="index.html" className="navbar-brand">
							<small>
								<FontAwesomeIcon icon={faLeaf} />
								Ace Admin
						</small>
						</a>
					</div>

					<div className="navbar-buttons navbar-header pull-right" role="navigation">
						<ul className="nav ace-nav">

							<li className={(this.state.navButtons.notifications) ? 'purple dropdown-modal open' : 'purple dropdown-modal'} onClick={() => this.handleNavButtonClick('notifications')}>
								<a data-toggle="dropdown" className="dropdown-toggle" href="#" aria-expanded="false">
									<FontAwesomeIcon icon={faBell} />
									{
										(this.state.notifications.number > 0) &&
										<span className="badge badge-important">{this.state.navButtons.notifications.number}</span>
									}
								</a>

								<ul className="dropdown-menu-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
									<li className="dropdown-header">
										<FontAwesomeIcon icon={faExclamationTriangle} /> notificações
									</li>

									<li className="dropdown-content ace-scroll" style={{ position: 'relative' }}><div className="scroll-track" style={{ display: 'none' }}><div className="scroll-bar"></div></div><div className="scroll-content">
										<ul className="dropdown-menu dropdown-navbar navbar-pink">
											<li>
												<a href="#">
													<div className="clearfix">
														<span className="pull-left"> Não há notificações</span>
													</div>
												</a>
											</li>
										</ul>
									</div></li>

									{
										// TODO CONDITIONAL if there is notification then display notifications									
									/* <li className="dropdown-content ace-scroll" style={{ position: 'relative' }}><div className="scroll-track" style={{ display: 'none' }}><div className="scroll-bar"></div></div><div className="scroll-content">
										<ul className="dropdown-menu dropdown-navbar navbar-pink">
											<li>
												<a href="#">
													<div className="clearfix">
														<span className="pull-left">
															<FontAwesomeIcon icon={faComment} />
															New Comments
													</span>
														<span className="pull-right badge badge-info">+12</span>
													</div>
												</a>
											</li>
										</ul>
									</div></li>

									<li className="dropdown-footer">
										<a href="#">
											See all notifications
                                        <FontAwesomeIcon icon={faArrowRight} />
										</a>
									</li> */}
								</ul>
							</li>

							<li className={(this.state.navButtons.user) ? 'light-blue dropdown-modal open' : 'light-blue dropdown-modal'} onClick={() => this.handleNavButtonClick('user')}>
								<a data-toggle="dropdown" href="#" className="dropdown-toggle" aria-expanded="false">
									<img className="nav-user-photo" src={require('./user.jpg')} alt="Jason's Photo" />
									<span className="user-info">
										<small>Welcome,</small>
										Jason
								</span>

									<FontAwesomeIcon icon={faCaretDown} />
								</a>

								<ul className="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
									<li>
										<a href="#">
											<FontAwesomeIcon icon={faCog} /> Settings
										</a>
									</li>

									<li>
										<a href="profile.html">
											<FontAwesomeIcon icon={faUser} /> Profile
										</a>
									</li>

									<li className="divider"></li>

									<li>
										<a href="#">
											<FontAwesomeIcon icon={faPowerOff} /> Logout
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}