import React from "react";
export default function Chart(){
    return (
        <>
            <div className="container-fluid">

                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Charts</h1>
                <p className="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
                    The charts below have been customized - for further customization options, please visit the <a  href={'/'}>official Chart.js
                        documentation</a>.</p>

                {/* Content Row */}
                <div className="row">

                    <div className="col-xl-8 col-lg-7">

                        {/* Area Chart */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
                            </div>
                            <div className="card-body">
                                <div className="chart-area"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                    <canvas id="myAreaChart" width="976" height="400" style={{"display": "block", "height": "320px", "width": "781px","className":"chartjs-render-monitor"}}></canvas>
                                </div>
                                <hr/>
                                Styling for the area chart can be found.
                            </div>
                        </div>

                        {/* Bar Chart */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
                            </div>
                            <div className="card-body">
                                <div className="chart-bar"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                    <canvas id="myBarChart" width="976" height="400" style={{"display": "block", "height": "320px", "width": "781px", "className":"chartjs-render-monitor"}}></canvas>
                                </div>
                                <hr/>
                                Styling for the bar chart can be found.
                            </div>
                        </div>

                    </div>

                    {/* Donut Chart */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            {/* Card Header - Dropdown */}
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
                            </div>
                            {/* Card Body */}
                            <div className="card-body">
                                <div className="chart-pie pt-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                    <canvas id="myPieChart" width="447" height="316" style={{"display": "block", "height": "253px", "width": "358px", "className":"chartjs-render-monitor"}}></canvas>
                                </div>
                                <hr/>
                                Styling for the donut chart can be found.
                            </div>
                        </div>
                    </div>
                </div>

                </div>
        </>
    );
}
