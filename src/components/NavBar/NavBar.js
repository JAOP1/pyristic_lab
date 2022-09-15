import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Fade,
  DataViewAlt,
  MachineLearning,
  Subtract
} from '@carbon/react/icons';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from '@carbon/react';


const NavBar = () => {
  const ITEMS_NAVBAR = [
    (
      <>
      <SideNavMenu renderIcon={Fade} title="Problem type" isActive>
        <SideNavMenuItem href="/">
          <Subtract />
          Continuos
        </SideNavMenuItem>
        <SideNavMenuItem href="/combinatorial">
          <Subtract />
          Combinatorial
        </SideNavMenuItem>
      </SideNavMenu>
      </>
    ),
    ( 
      <>             
        <SideNavLink
          renderIcon={ DataViewAlt }
          href="https://jaop1.github.io/pyristic/">
          Documentation
        </SideNavLink>
        <SideNavLink
          renderIcon={ MachineLearning }
          element={Link}
          to="/repos">
          Contributions
        </SideNavLink>
      </>
    )
  ];
  const [indexItems, setIndexItems] = useState(0);

  return (
  <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="IBM Platform Name">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              isCollapsible
              onClick={() => { 
                setIndexItems( indexItems  ^ 1);
                onClickSideNavExpand();
              }}
              isActive={isSideNavExpanded}
          />
          <HeaderName href="#" prefix="pyristic">
            [LAB]
          </HeaderName>
           <SideNav
             aria-label="Side navigation"
             isRail
             expanded={isSideNavExpanded}
             onOverlayClick={onClickSideNavExpand}
            >
             <SideNavItems>
              {ITEMS_NAVBAR[indexItems]}
             </SideNavItems>
           </SideNav>
         </Header>
       </>
      )}
    />
  )
};

export default NavBar;