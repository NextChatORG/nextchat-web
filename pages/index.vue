<!--
  NextChat - Messages social network
  Copyright (C) 2021  NextChat Org & NextChat Contributors
  
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->
<template>
  <Header />
  <div id="intro">
    <h1>NextChat</h1>
    <h2>Messages social network</h2>
  </div>
  <div id="features"></div>
  <div id="download"></div>
  <div id="pricing"></div>
</template>

<style scoped lang="scss">
#intro {
  width: 100%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0;
    margin-bottom: 0.6rem;
    color: #333;
    font-weight: 800;
    font-size: 2.8rem;
  }

  h2 {
    margin: 0;
    color: #555;
    font-weight: 350;
    font-size: 1.4rem;
  }
}
</style>
