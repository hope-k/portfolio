import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const SvgBg = styled.div`
  height: 100vh;
  width: 100 %;
  position: absolute;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='1240' preserveAspectRatio='none' viewBox='0 0 1440 1240'%3e%3cg mask='url(%26quot%3b%23SvgjsMask3192%26quot%3b)' fill='none'%3e%3crect width='1440' height='1240' x='0' y='0' fill='url(%23SvgjsLinearGradient3193)'%3e%3c/rect%3e%3cpath d='M818.54 210.36L963.17 293.86L963.17 460.86L818.54 544.36L673.91 460.86L673.91 293.86zM818.54 1212.36L963.17 1295.86L963.17 1462.86L818.54 1546.36L673.91 1462.86L673.91 1295.86zM963.17 -40.14L1107.8 43.36L1107.8 210.36L963.17 293.86L818.54 210.36L818.54 43.36zM1107.8 210.36L1252.43 293.86L1252.43 460.86L1107.8 544.36L963.17 460.86L963.17 293.86z' stroke='url(%23SvgjsLinearGradient3194)' stroke-width='2'%3e%3c/path%3e%3cpath d='M801.84 210.36 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM946.47 293.86 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM946.47 460.86 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM801.84 544.36 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM657.21 460.86 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM657.21 293.86 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM801.84 1212.36 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM946.47 1295.86 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM946.47 1462.86 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM801.84 1546.36 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM657.21 1462.86 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM657.21 1295.86 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM946.47 -40.14 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM1091.1 43.36 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM1091.1 210.36 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM801.84 43.36 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM1235.73 293.86 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM1235.73 460.86 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0zM1091.1 544.36 a16.7 16.7 0 1 0 33.4 0 a16.7 16.7 0 1 0 -33.4 0z' fill='url(%23SvgjsLinearGradient3194)'%3e%3c/path%3e%3cpath d='M81.05 -84.68L186.71 -23.68L186.71 98.32L81.05 159.32L-24.61 98.32L-24.61 -23.68zM186.71 98.32L292.37 159.32L292.37 281.32L186.71 342.32L81.05 281.32L81.05 159.32zM81.05 281.32L186.71 342.32L186.71 464.32L81.05 525.32L-24.61 464.32L-24.61 342.32zM186.71 1196.32L292.37 1257.32L292.37 1379.32L186.71 1440.32L81.05 1379.32L81.05 1257.32zM398.02 98.32L503.68 159.32L503.68 281.32L398.02 342.32L292.37 281.32L292.37 159.32zM292.37 281.32L398.02 342.32L398.02 464.32L292.37 525.32L186.71 464.32L186.71 342.32zM398.02 464.32L503.68 525.32L503.68 647.32L398.02 708.32L292.37 647.32L292.37 525.32zM398.02 1196.32L503.68 1257.32L503.68 1379.32L398.02 1440.32L292.37 1379.32L292.37 1257.32zM503.68 -84.68L609.34 -23.68L609.34 98.32L503.68 159.32L398.02 98.32L398.02 -23.68zM609.34 464.32L715 525.32L715 647.32L609.34 708.32L503.68 647.32L503.68 525.32zM503.68 647.32L609.34 708.32L609.34 830.32L503.68 891.32L398.02 830.32L398.02 708.32zM609.34 1196.32L715 1257.32L715 1379.32L609.34 1440.32L503.68 1379.32L503.68 1257.32zM820.66 98.32L926.31 159.32L926.31 281.32L820.66 342.32L715 281.32L715 159.32zM820.66 464.32L926.31 525.32L926.31 647.32L820.66 708.32L715 647.32L715 525.32zM715 647.32L820.66 708.32L820.66 830.32L715 891.32L609.34 830.32L609.34 708.32zM926.31 -84.68L1031.97 -23.68L1031.97 98.32L926.31 159.32L820.66 98.32L820.66 -23.68zM1031.97 98.32L1137.63 159.32L1137.63 281.32L1031.97 342.32L926.31 281.32L926.31 159.32zM1137.63 -84.68L1243.29 -23.68L1243.29 98.32L1137.63 159.32L1031.97 98.32L1031.97 -23.68zM1243.29 830.32L1348.95 891.32L1348.95 1013.32L1243.29 1074.32L1137.63 1013.32L1137.63 891.32zM1348.95 -84.68L1454.61 -23.68L1454.61 98.32L1348.95 159.32L1243.29 98.32L1243.29 -23.68zM1348.95 281.32L1454.61 342.32L1454.61 464.32L1348.95 525.32L1243.29 464.32L1243.29 342.32zM1454.61 464.32L1560.26 525.32L1560.26 647.32L1454.61 708.32L1348.95 647.32L1348.95 525.32zM1348.95 647.32L1454.61 708.32L1454.61 830.32L1348.95 891.32L1243.29 830.32L1243.29 708.32zM1348.95 1013.32L1454.61 1074.32L1454.61 1196.32L1348.95 1257.32L1243.29 1196.32L1243.29 1074.32z' stroke='url(%23SvgjsLinearGradient3195)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask3192'%3e%3crect width='1440' height='1240' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient3193'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(59%2c 8%2c 71%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='49.968' y1='-49.972' x2='1390.0320000000002' y2='1289.972' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient3194'%3e%3cstop stop-color='rgba(158%2c 0%2c 129%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='%2303305d' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0' y1='620' x2='1440' y2='620' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient3195'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 90%2c 158%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow - y: hidden;
  z-index: -2;
  filter: brightness(50%);
`



const Background = () => {

  return (
    <>
      <SvgBg></SvgBg>
    </>
  )
};

export default Background;
