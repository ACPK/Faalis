/* -----------------------------------------------------------------------------
    Red Base - Basic website skel engine
    Copyright (C) 2012-2013 Yellowen

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
----------------------------------------------------------------------------- */
var Logs = angular.module("Logs", []);

Logs.config(["$routeProvider", function($routeProvider){

    $routeProvider.
        when("/logs/", {
            templateUrl: template("logs/index"),
            controller: "LogsController"
        });
}]);

Logs.controller("LogsController", ["$scope", "Restangular","$sce",
                                    function($scope, API, $sce){

    API.all("logs").getList().then(function(data){
        var content = data.content;
        content = content.replace(/\n/gm, "<br />");
        content = content.replace(/\t/gm, "&nbsp;");
        content = content.replace(/\[1m\[(\d+)m(.*)\[0m/gm, "<strong class='m$1-$2'>$3</strong>");
        //content = content.replace(/\[(\d+)m([/^]*)\[0m/gm, "<strong class='m$1'>$2</strong>");
        $scope.logs = $sce.trustAsHtml(content);
    });

}]);