import React from 'react';
import './Reports.css';
import Sidebar from './Sidebar';
const Reports = () => {
    return (
        <div>
        <Sidebar/>
        <div className="reports">
            <h2>Reports</h2>
            <div className="report-section">
                <h3>Sales Report</h3>
                <p>View the daily, weekly, and monthly sales performance.</p>
                {/* Placeholder for sales report content */}
                <div className="report-content">
                    <p>Total Sales: $25,000</p>
                    <p>Number of Transactions: 150</p>
                    <p>Average Order Value: $166.67</p>
                    {/* Add charts, tables, or graphs as needed */}
                </div>
            </div>

            <div className="report-section">
                <h3>Customer Feedback</h3>
                <p>Summary of customer reviews and feedback.</p>
                {/* Placeholder for feedback report content */}
                <div className="report-content">
                    <p>Average Rating: 4.5</p>
                    <p>Total Reviews: 120</p>
                    <p>Top Feedback: "Great service and delicious food!"</p>
                </div>
            </div>

            <div className="report-section">
                <h3>Inventory Report</h3>
                <p>Monitor stock levels and track inventory usage.</p>
                {/* Placeholder for inventory report content */}
                <div className="report-content">
                    <p>Items Low in Stock: 5</p>
                    <p>Most Used Item: Chicken Breast</p>
                    <p>Restock Needed: Tomatoes, Cheese</p>
                </div>
            </div>
            {/* Employee Performance */}
            <div className="report-section">
                <h3>Employee Performance</h3>
                <p>Evaluate the performance of staff members.</p>
                <div className="report-content">
                    <p>Top Performer: John Doe (98% customer satisfaction)</p>
                    <p>Training Needs: 2 staff members</p>
                    <p>Overtime Hours: 30 hours total</p>
                </div>
            </div>

            {/* Expenses Report */}
            <div className="report-section">
                <h3>Expenses Report</h3>
                <p>Overview of the restaurant's expenses.</p>
                <div className="report-content">
                    <p>Total Expenses: $18,000</p>
                    <p>Top Expenses: Food supplies, Utilities</p>
                    <p>Profit Margin: 30%</p>
                </div>
            </div>

            {/* Customer Demographics */}
            <div className="report-section">
                <h3>Customer Demographics</h3>
                <p>Understand the profile of your customer base.</p>
                <div className="report-content">
                    <p>Majority Age Group: 25-34</p>
                    <p>Gender Distribution: 60% Female, 40% Male</p>
                    <p>Peak Hours: 6 PM - 8 PM</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Reports;
