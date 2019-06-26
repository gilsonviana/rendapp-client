import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faDesktop, faAngleDown, faCaretRight, faLeaf, faPlus, faEye, faPencilAlt, faFile } from '@fortawesome/free-solid-svg-icons'

export default class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sidebarElements: {
                uiElements: false,
                otherPages: false
            }
        }

        this.handleSidebarClick = this.handleSidebarClick.bind(this)
    }

    /**
	 * Toggle display/hide of a particular element
	 * 
	 * @param {String} elementName name given to the component on the state object
	 */
    handleSidebarClick(elementName) {
        this.setState(state => ({
			sidebarElements: {
				[elementName]: !state.sidebarElements[elementName]
			}
		}))
    }

    render() {
        return(
            <div id="sidebar" className="sidebar responsive ace-save-state" data-sidebar="true" data-sidebar-scroll="true" data-sidebar-hover="true">
				{/* <script type="text/javascript">
					try{ace.settings.loadState('sidebar')}catch(e){}
				</script> */}				

				<ul className="nav nav-list" style={{top: '0px'}}>
					<li className="active">
						<a href="index.html">							
                            <FontAwesomeIcon icon={faTachometerAlt} className="menu-icon"/>
							<span className="menu-text"> Painel </span>
						</a>

						<b className="arrow"></b>
					</li>

					<li className={(this.state.sidebarElements.uiElements) ? 'open' : ''} onClick={() => this.handleSidebarClick('uiElements')}>
						<a href="#" className="dropdown-toggle">							
                            <FontAwesomeIcon icon={faDesktop} className="menu-icon"/>
							<span className="menu-text">
								UI &amp; Elements
							</span>
							
                            <FontAwesomeIcon icon={faAngleDown} className="arrow"/>
						</a>

						<b className="arrow"></b>

						<ul className={(this.state.sidebarElements.uiElements) ? 'submenu nav-show' : 'submenu nav-hide'} style={(this.state.sidebarElements.uiElements) ? {display: 'block'} : {display: 'none'}}>
							<li className="">
								<a href="#" className="dropdown-toggle">									
                                    <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>

									Layouts
									<FontAwesomeIcon icon={faAngleDown} className="arrow"/>
								</a>

								<b className="arrow"></b>

								<ul className="submenu">
									<li className="">
										<a href="top-menu.html">
											<FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
											Top Menu
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="two-menu-1.html">
                                            <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
											Two Menus 1
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="two-menu-2.html">
                                            <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
											Two Menus 2
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="mobile-menu-1.html">
                                            <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
											Default Mobile Menu
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="mobile-menu-2.html">
                                            <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
											Mobile Menu 2
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="mobile-menu-3.html">
                                            <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
											Mobile Menu 3
										</a>

										<b className="arrow"></b>
									</li>
								</ul>
							</li>

							<li className="">
								<a href="typography.html">
                                    <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
									Typography
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="elements.html">
                                    <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
									Elements
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="buttons.html">
                                    <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
									Buttons &amp; Icons
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="content-slider.html">
                                    <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
									Content Sliders
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="treeview.html">
                                    <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
									Treeview
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="jquery-ui.html">
                                    <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
									jQuery UI
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="nestable-list.html">
                                    <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
									Nestable Lists
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="#" className="dropdown-toggle">
                                    <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>

									Three Level Menu
									<FontAwesomeIcon icon={faAngleDown} className="arrow"/>
								</a>

								<b className="arrow"></b>

								<ul className="submenu">
									<li className="">
										<a href="#">											
                                            <FontAwesomeIcon icon={faLeaf} className="menu-icon green"/>
											Item #1
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="#" className="dropdown-toggle">											
                                            <FontAwesomeIcon icon={faPencilAlt} className="menu-icon orange"/>
											4th level
											<FontAwesomeIcon icon={faAngleDown} className="arrow"/>
										</a>

										<b className="arrow"></b>

										<ul className="submenu">
											<li className="">
												<a href="#">													
                                                    <FontAwesomeIcon icon={faPlus} className="menu-icon purple"/>
													Add Product
												</a>

												<b className="arrow"></b>
											</li>

											<li className="">
												<a href="#">													
                                                    <FontAwesomeIcon icon={faEye} className="menu-icon pink"/>
													View Products
												</a>

												<b className="arrow"></b>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					
					<li className="">
						<a href="#" className="dropdown-toggle">							
                            <FontAwesomeIcon icon={faFile} className="menu-icon"/>

							<span className="menu-text">
								Other Pages

								<span className="badge badge-primary">5</span>
							</span>

							<FontAwesomeIcon icon={faAngleDown} className="arrow"/>
						</a>

						<b className="arrow"></b>

						<ul className="submenu">
							<li className="">
								<a href="faq.html">
                                    <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
									FAQ
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="error-404.html">
                                    <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
									Error 404
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="error-500.html">
                                    <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
									Error 500
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="grid.html">
                                    <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
									Grid
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="blank.html">
                                    <FontAwesomeIcon icon={faCaretRight} className="menu-icon"/>
									Blank Page
								</a>

								<b className="arrow"></b>
							</li>
						</ul>
					</li>
				</ul>
			</div>
        )
    }
}