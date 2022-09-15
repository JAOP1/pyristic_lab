import React from 'react';
import { 
    LineChart,
    Line,
    XAxis,
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
} from 'recharts';
import {
  Loading
} from '@carbon/react';

const AreaChartComponent = ({ data }) => {
  const {name, ...typeLines} = data.length !== 0 ? data[0]: {name:null, falseAttribute:null};
  const colors = [
    "#1bbacf",
    "#8884d8",
    "#82ca9d",
  ];

  if(data.length === 0){
    return (
      <ResponsiveContainer width={'100%'} height={350}>
        <Loading className={'center-item'} withOverlay={false}/>
      </ResponsiveContainer>
    );
  }

  return (
    <>
      <h3 style={{color:'#4f4f4f', marginTop:'2%', marginBottom:'3%'}}> Results in the objective function</h3>
      <ResponsiveContainer  width="100%" height={350}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {
          Object.keys(typeLines).map(( dataKey, ind ) => (
            <>
              <Line key={`line-${ind}`} type="monotone" dataKey={dataKey} stroke={colors[ ind % colors.length ]} activeDot={{ r: 7 }} />
            </>
          )
        )}
      </LineChart>
      </ResponsiveContainer>
    </>
  );
};

AreaChartComponent.defaultProps = {
    data:[]
};

export default AreaChartComponent;

