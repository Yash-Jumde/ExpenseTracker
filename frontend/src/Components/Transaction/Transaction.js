import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Transaction() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses} = useGlobalContext()

    let colo = "green";

    if(totalBalance() < 0){
        colo="red"
    }

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="balance">
                    <h2>Total Balance</h2>
                    <p className={colo}>
                        {dollar} {totalBalance()}
                    </p>
                </div>
                <div className="history-con">
                    <History caller="full"/>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`

    .history-con{
        h2{
            margin: 1rem 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    .balance{
        font-weight: bold;
        grid-column: 2 / 4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .green{
            color: green;
            opacity: 0.6;
            font-size: 4.5rem;
        }
        .red{
            color: red;
            opacity: 0.6;
            font-size: 4.5rem;
        }
    }
`;

export default Transaction