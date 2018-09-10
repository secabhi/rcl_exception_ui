import React from 'react';
import {map} from 'underscore';

export const Chart = (props) => {
    const {data} = props
    return (
        <div className="barChart-border">
            <div className="barChart-heading">
                <h5>Exceptions</h5>
            </div>
            <div className="DashboardChart">
                <figure className="chart-subhead">
                    <div className="graphic">
                        <div className="row">
                            <div><h6 className="charthead"></h6></div>
                            <div className="chart">
                                {map(data, ((item, i) => {
                                    return (<span className="block" key={i} style={{ 'width': item.value }} title={item.display + ' - ' + item.value}>
                                        <span className="value">{data.display}</span>
                                    </span>)
                                }))}

                            </div>
                        </div>
                    </div>
                    <div className="x-axis">
                        <ul className="legend">
                            {map(data, (item, i) => {
                                return <li key={i}>{item.display}</li>
                            })}
                        </ul>
                    </div>
                </figure>
            </div>
        </div>
    )
}