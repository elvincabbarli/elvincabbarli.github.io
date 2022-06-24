import React from 'react'
import { FaPizzaSlice , FaHamburger} from 'react-icons/fa';
import {GiNoodles , GiMeat } from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

function Category() {
  return (
    <List>
         <SLink to={'/cuisine/Italian'}>
            < FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            < FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            < GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/German'}>
            < GiMeat />
            <h4>German</h4>
        </SLink>
    </List>
  )
}

const List =  styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
`;

const SLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(.8);
    background: linear-gradient(35deg , #494949 , #313131);

    h4{
        color: white;
        font-size: .8rem;
    }

    svg{
        color: #fff;
        font-size: 1.5rem;
    }

    &.active{
        background: linear-gradient(to right , #f27121 , #e94057);
        svg{
            color: #fff;
        }

        h4{
            color: #fff;
        }
    }
`

export default Category