/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('click', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
	// Agrego el detector de eventos:
	window.addEventListener("batterystatus", onBatteryStatus, false); 
	document.getElementById("btn1").addEventListener("click",test);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }    
};

app.initialize();

//Llama a la funci�n "onBatteryStatus" al pulsar el bot�n
function test(){
   window.addEventListener("batterystatus", onBatteryStatus, false);
}

// Funci�n que devuelve la llamada
function onBatteryStatus(info) {

   //Salta una alerta mostrando el nivel de bater�a y si est� conectado
   alert("ESTADO BATERIA: \n Nivel: " + info.level + " Conectado: " + info.isPlugged);

   //Si se desconecta el cargador salta una alarma
   if(info.isPlugged==false) {
	var audio = document.getElementById("audio");
	audio.play();
   } 
}