import React from 'react';
import { 
    Grid,
    Column,
    Link
} from '@carbon/react';
import { LogoGithub } from '@carbon/react/icons';

const Footer = () => {
    return(
        <Grid as='footer' fullWidth>
            <Column as='section' lg={16} md={8} sm={4} >
                <h6 className='footer-heading'>About</h6>
                <p>
                    Pyristic lab is a free open source project with the target to make the 
                    metaheuristic friendly way to coding small parts in a easy way. 
                </p>
                <hr/>
            </Column>
            <Column as='section' lg={12} md={5} sm={4}>
                        <p className="copyright-text">
                            Made and supported by the pyristic team.
                        </p>
            </Column>
            <Column as='section' lg={4} md={3} sm={4}>
                <Link renderIcon={LogoGithub} size='lg' href='https://github.com/JAOP1'>
                    Other projects
                </Link>
            </Column>
        </Grid>

    );
};
export default Footer;