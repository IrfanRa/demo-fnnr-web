angular.module("fuelNowNetRetail").run(["$templateCache", function($templateCache) {$templateCache.put("404.html","<!DOCTYPE html><html lang=en><head><meta charset=utf-8><title>Page Not Found :(</title><style>\n            ::-moz-selection {\n                background: #b3d4fc;\n                text-shadow: none;\n            }\n\n            ::selection {\n                background: #b3d4fc;\n                text-shadow: none;\n            }\n\n            html {\n                padding: 30px 10px;\n                font-size: 20px;\n                line-height: 1.4;\n                color: #737373;\n                background: #f0f0f0;\n                -webkit-text-size-adjust: 100%;\n                -ms-text-size-adjust: 100%;\n            }\n\n            html,\n            input {\n                font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            }\n\n            body {\n                max-width: 500px;\n                _width: 500px;\n                padding: 30px 20px 50px;\n                border: 1px solid #b3b3b3;\n                border-radius: 4px;\n                margin: 0 auto;\n                box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n                background: #fcfcfc;\n            }\n\n            h1 {\n                margin: 0 10px;\n                font-size: 50px;\n                text-align: center;\n            }\n\n            h1 span {\n                color: #bbb;\n            }\n\n            h3 {\n                margin: 1.5em 0 0.5em;\n            }\n\n            p {\n                margin: 1em 0;\n            }\n\n            ul {\n                padding: 0 0 0 40px;\n                margin: 1em 0;\n            }\n\n            .container {\n                max-width: 380px;\n                _width: 380px;\n                margin: 0 auto;\n            }\n\n            /* google search */\n\n            #goog-fixurl ul {\n                list-style: none;\n                padding: 0;\n                margin: 0;\n            }\n\n            #goog-fixurl form {\n                margin: 0;\n            }\n\n            #goog-wm-qt,\n            #goog-wm-sb {\n                border: 1px solid #bbb;\n                font-size: 16px;\n                line-height: normal;\n                vertical-align: top;\n                color: #444;\n                border-radius: 2px;\n            }\n\n            #goog-wm-qt {\n                width: 220px;\n                height: 20px;\n                padding: 5px;\n                margin: 5px 10px 0 0;\n                box-shadow: inset 0 1px 1px #ccc;\n            }\n\n            #goog-wm-sb {\n                display: inline-block;\n                height: 32px;\n                padding: 0 10px;\n                margin: 5px 0 0;\n                white-space: nowrap;\n                cursor: pointer;\n                background-color: #f5f5f5;\n                background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                -webkit-appearance: none;\n                -moz-appearance: none;\n                appearance: none;\n                *overflow: visible;\n                *display: inline;\n                *zoom: 1;\n            }\n\n            #goog-wm-sb:hover,\n            #goog-wm-sb:focus {\n                border-color: #aaa;\n                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n                background-color: #f8f8f8;\n            }\n\n            #goog-wm-qt:hover,\n            #goog-wm-qt:focus {\n                border-color: #105cb6;\n                outline: 0;\n                color: #222;\n            }\n\n            input::-moz-focus-inner {\n                padding: 0;\n                border: 0;\n            }\n        </style></head><body><div class=container><h1>Not found <span>:(</span></h1><p>Sorry, but the page you were trying to view does not exist.</p><p>It looks like this was the result of either:</p><ul><li>a mistyped address</li><li>an out-of-date link</li></ul><script>\n                var GOOG_FIXURL_LANG = (navigator.language || \'\').slice(0,2),GOOG_FIXURL_SITE = location.host;\n            </script><script src=//linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js></script></div></body></html>");
$templateCache.put("app/views/dashboard.html","<div layout-gt-md=row><panel-widget flex title=\"Site visitors\" template=app/views/partials/visitors.html class=fixed-height-widget></panel-widget><panel-widget flex title=Warnings template=app/views/partials/warnings.html class=fixed-height-widget></panel-widget><panel-widget flex title=\"Memory load\" template=app/views/partials/memory.html class=fixed-height-widget></panel-widget></div><div layout-gt-md=row><panel-widget flex title=\"Server Control Panel\" template=app/views/partials/controlPanel.html class=fixed-height-widget></panel-widget><panel-widget flex title=\"Usage Stats\" template=app/views/partials/usage.html class=fixed-height-widget></panel-widget><panel-widget flex title=\"Autocomplete Input\" template=app/views/partials/autocomplete.html options=true class=fixed-height-widget></panel-widget></div><div layout-gt-md=row><panel-widget flex title=Performance template=app/views/partials/performance.html options=true></panel-widget><panel-widget flex title=\"TODO list\" template=app/views/partials/checkboxes.html></panel-widget></div>");
$templateCache.put("app/views/data-table.html","<div class=\"table-responsive-vertical md-whiteframe-z1\"><md-toolbar class=\"md-table-toolbar md-default\"><div class=md-toolbar-tools><span>Nutrition</span></div></md-toolbar><md-table-container><table md-table md-row-select multiple ng-model=selected class=\"table table-hover table-bordered\"><thead md-head md-order=query.order md-on-reorder=vm.getItems()><tr md-row><th md-column md-numeric>ID</th><th md-column md-order-by=nameToLower><span>Dessert (100g serving)</span></th><th md-column md-numeric md-order-by=calories.value><span>Calories</span></th><th md-column md-numeric>Fat (g)</th><th md-column md-numeric>Carbs (g)</th></tr></thead><tbody md-body><tr md-row md-select=item md-select-id=name md-auto-select ng-repeat=\"item in vm.tableData\"><td md-cell>{{item.id}}</td><td md-cell>{{item.issue}}</td><td md-cell>{{item.progress}}</td><td md-cell>{{item.status}}</td><td md-cell><md-progress-linear class=\"table-progress {{item.class}}\" md-mode=determinate value={{item.progress}}></md-progress-linear></td></tr></tbody></table></md-table-container><md-table-pagination md-limit=query.limit md-limit-options=\"[5, 10, 15]\" md-page=query.page md-total={{vm.totalItems}} md-on-paginate=vm.getItems() md-page-select></md-table-pagination></div>");
$templateCache.put("app/views/main.html","<md-sidenav md-is-locked-open=\"$mdMedia(\'gt-sm\')\" md-component-id=left class=\"md-whiteframe-z2 md-sidenav-left\"><md-toolbar md-theme=custom class=\"md-hue-1 md-whiteframe-z2\"><md-button layout=row layout-align=\"center center\" class=\"md-toolbar-tools md-warn\" href=https://github.com/flatlogic/angular-material-dashboard><h1>AMD</h1></md-button></md-toolbar><md-button ng-repeat-start=\"item in vm.menuItems\" layout=column layout-align=\"center center\" flex class=capitalize ng-click=vm.selectItem(item) ui-sref-active=md-warn ui-sref={{item.sref}}><div hide-sm hide-md class=md-tile-content><i class=\"material-icons md-36\">{{item.icon}}</i></div><div class=md-tile-content>{{item.name}}</div></md-button><md-divider ng-repeat-end></md-divider><md-button ng-click=vm.showActions($event) layout-align=\"center center\"><div class=md-tile-content>Actions</div></md-button></md-sidenav><div layout=column flex><md-toolbar layout=row layout-align=\"center center\"><section layout-align=\"start center\" layout-fill flex><md-button hide-gt-sm ng-click=vm.toggleItemsList() aria-label=Menu><i class=material-icons>menu</i></md-button></section><section layout-align=\"end center\"><md-button class=toolbar-button aria-label=Search><i class=material-icons>search</i></md-button><md-button class=toolbar-button aria-label=Notifications><i class=material-icons>notifications</i> <span class=notifications-label>7</span></md-button><md-button class=toolbar-button aria-label=Settings ng-click=vm.toggleRightSidebar()><i class=material-icons>menu</i></md-button></section></md-toolbar><md-content flex class=\"md-padding page-content\"><div ui-view></div></md-content></div><md-sidenav md-component-id=right class=\"md-whiteframe-z2 md-sidenav-right\"><md-toolbar><md-toolbar class=md-warn layout=row layout-align=\"center center\"><img class=img-circle ng-src=assets/images/feynman.jpg><md-menu md-offset=\"0 20\"><md-button class=capitalize ng-click=$mdOpenMenu() aria-label=\"Open menu\"><span>Richard Feynman</span> <i class=material-icons>keyboard_arrow_down</i></md-button><md-menu-content width=3><md-menu-item><md-button ng-click=$mdCloseMenu() ui-sref=home.profile>Profile</md-button></md-menu-item><md-menu-item><md-button ng-click=$mdCloseMenu() ui-sref=home.dashboard>Log out</md-button></md-menu-item></md-menu-content></md-menu></md-toolbar></md-toolbar><section><md-toolbar md-theme=grey class=md-hue-1><div class=md-toolbar-tools><h3>Messages</h3></div></md-toolbar><div ng-include src=\"\'app/views/partials/messages.html\'\"></div></section></md-sidenav>");
$templateCache.put("app/views/profile.html","<md-content md-theme=dark class=md-padding layout=row layout-sm=column><md-input-container><label>Username</label> <input ng-model=vm.user.title></md-input-container><md-input-container><label>Email</label> <input ng-model=vm.user.email type=email></md-input-container></md-content><md-content class=md-padding><form name=userForm><div layout layout-sm=column><md-input-container flex=80><label>Company (Disabled)</label> <input ng-model=vm.user.company disabled></md-input-container><md-input-container flex><label>Submission Date</label> <input type=date ng-model=vm.user.submissionDate></md-input-container></div><div layout layout-sm=column><md-input-container flex><label>First Name</label> <input ng-model=vm.user.firstName placeholder=\"Placeholder text\"></md-input-container><md-input-container flex><label>Last Name</label> <input ng-model=vm.user.lastName></md-input-container></div><md-input-container flex><label>Address</label> <input ng-model=vm.user.address></md-input-container><div layout layout-sm=column><md-input-container flex><label>City</label> <input ng-model=vm.user.city></md-input-container><md-input-container flex><label>State</label> <input ng-model=user.state></md-input-container><md-input-container flex><label>Postal Code</label> <input ng-model=vm.user.postalCode></md-input-container></div><md-input-container flex><label>About us</label> <textarea ng-model=vm.user.biography columns=1 md-maxlength=150></textarea></md-input-container></form></md-content>");
$templateCache.put("app/views/table.html","<div class=\"table-responsive-vertical md-whiteframe-z1\"><table id=table class=\"table table-hover table-bordered\"><thead><tr><th>#</th><th>Issue</th><th>Status</th><th>Progress</th></tr></thead><tbody><tr ng-repeat=\"data in vm.tableData track by $index\"><td data-title=ID>{{$index + 1}}</td><td data-title=Issue>{{data.issue}}</td><td data-title=Status>{{data.status}}</td><td data-title=Progress><md-progress-linear class=\"table-progress {{data.class}}\" md-mode=determinate value={{data.progress}}></md-progress-linear></td></tr></tbody></table></div>");
$templateCache.put("app/views/partials/autocomplete.html","<div ng-controller=\"SearchController as vm\"><md-content ng-show=$showOptions class=options><md-radio-group ng-model=vm.disableCaching><md-radio-button ng-value=true>Disable caching</md-radio-button><md-radio-button ng-value=false>Enable caching</md-radio-button></md-radio-group></md-content><md-content class=md-padding><md-autocomplete placeholder=\"Search country\" md-selected-item=vm.selectedCountry md-search-text=vm.searchText md-no-cache=vm.disableCaching md-items=\"item in vm.querySearch(vm.searchText)\" md-item-text=item.display><span md-highlight-text=vm.searchText>{{item.display}}</span></md-autocomplete><p>Selected country: <b>{{vm.selectedCountry.display || \'No country selected\'}}</b></p><p>Country code: <b>{{vm.selectedCountry.code || \'No country selected\'}}</b></p></md-content></div>");
$templateCache.put("app/views/partials/bottomSheet.html","<md-bottom-sheet class=\"md-list md-has-header\"><md-subheader>Select action</md-subheader><md-list><md-list-item ng-repeat=\"action in vm.actions\"><md-button class=md-list-item-content ng-click=vm.performAction(action) ng-href={{action.url}} target=_blank><i class=material-icons>{{action.icon}}</i> <span class=share-label>{{action.name}}</span></md-button></md-list-item></md-list></md-bottom-sheet>");
$templateCache.put("app/views/partials/checkboxes.html","<md-content class=md-padding ng-controller=\"TodoController as vm\"><div layout=row><h4 flex=82>{{vm.remaining()}} of {{vm.todos.length}} remaining</h4><md-button class=md-primary ng-click=vm.toggleAll()>Toggle All</md-button></div><md-checkbox ng-repeat=\"todo in vm.todos\" ng-model=todo.done>{{todo.text}}</md-checkbox><form ng-submit=vm.addTodo($event) novalidate name=tasksForm><div layout=row flex><md-input-container flex ng-class=\"{\'md-input-invalid\':tasksForm.taskText.$error.required && tasksForm.$submitted}\"><label>Write some todo task here...</label> <input ng-model=vm.todoText name=taskText required></md-input-container><md-button class=\"md-fab md-wayrn md-mini\" ng-click=vm.addTodo($event)><i class=material-icons>add</i></md-button></div><md-button class=md-primary ng-click=vm.archive($event)>Remove completed</md-button></form></md-content>");
$templateCache.put("app/views/partials/controlPanel.html","<md-content ng-controller=\"ControlPanelController as vm\" class=md-padding><md-progress-linear class=\"widget-progress md-accent\" md-mode=determinate value={{vm.determinateValue}} ng-show=vm.showProgress></md-progress-linear><md-radio-group ng-model=vm.reloadServer><md-radio-button class=md-accent value=Staging>Staging server</md-radio-button><md-radio-button class=md-accent value=Production>Production server</md-radio-button></md-radio-group><md-button class=\"md-raised md-warn\" ng-click=vm.performProgress()>Reload server</md-button></md-content>");
$templateCache.put("app/views/partials/memory.html","<md-content ng-controller=\"MemoryController as vm\" layout=row layout-align=\"center center\"><nvd3 options=vm.chartOptions data=vm.memoryChartData></nvd3></md-content>");
$templateCache.put("app/views/partials/messages.html","<div class=messages ng-controller=\"MessagesController as vm\"><md-content class=messages-content><messages-section theme=md-accent title=\"New Orders\" messages=vm.messages></messages-section><messages-section theme=md-primary title=Delivered messages=vm.messages></messages-section><messages-section theme=md-warn title=\"Problems reported\" messages=vm.messages></messages-section><md-divider></md-divider></md-content></div>");
$templateCache.put("app/views/partials/performance.html","<div ng-controller=\"PerformanceController as vm\"><md-content ng-show=$showOptions class=options><md-radio-group ng-model=vm.performancePeriod ng-change=vm.changePeriod()><md-radio-button value=week>Last week</md-radio-button><md-radio-button value=month>Last month</md-radio-button></md-radio-group></md-content><md-content class=md-padding><nvd3 options=vm.chartOptions data=vm.performanceChartData></nvd3></md-content></div>");
$templateCache.put("app/views/partials/usage.html","<md-content ng-controller=\"UsageController as vm\" class=md-padding layout=row><div flex><nvd3 options=vm.chartOptions data=vm.ramChartData></nvd3><h4 class=donut-chart-title>RAM</h4></div><div flex><nvd3 options=vm.chartOptions data=vm.storageChartData></nvd3><h4 class=donut-chart-title>Storage</h4></div></md-content>");
$templateCache.put("app/views/partials/visitors.html","<md-content ng-controller=\"VisitorsController as vm\" layout=row layout-align=\"center center\"><nvd3 options=vm.chartOptions data=vm.visitorsChartData></nvd3></md-content>");
$templateCache.put("app/views/partials/warnings.html","<md-content ng-controller=\"WarningsController as vm\" layout=row layout-align=\"center center\"><nvd3 options=vm.chartOptions data=vm.warningsChartData></nvd3></md-content>");}]);