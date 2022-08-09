// import React from 'react';
// import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import { ECharts } from "react-native-echarts-wrapper";

// export default function Chart() {
//     const option = {
//         tooltip: {
//           trigger: 'item'
//         },
//         legend: {
//           top: '5%',
//           left: 'center'
//         },
//         series: [
//           {
//             name: 'Access From',
//             type: 'pie',
//             radius: ['40%', '70%'],
//             avoidLabelOverlap: false,
//             label: {
//               show: false,
//               position: 'center'
//             },
//             emphasis: {
//               label: {
//                 show: true,
//                 fontSize: '40',
//                 fontWeight: 'bold'
//               }
//             },
//             labelLine: {
//               show: false
//             },
//             data: [
//               { value: 1048, name: 'Search Engine' },
//               { value: 735, name: 'Direct' },
//             ]
//           }
//         ]
//       };
//   return (
//     <SafeAreaView>
//         <>
//         <ECharts option= {option} />
//         </>
//     </SafeAreaView>
//   )
// }
