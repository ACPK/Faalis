Dashboard.GroupsIndexController = Ember.ArrayController.extend(Dashboard.DController, {
    action_buttons: [{
                classes: "btn small green",
                label: _('New'),
                icon: "fa fa-plus",
                route: 'groups.new'
            }]
});
Dashboard.GroupsNewController = Ember.ArrayController.extend(Dashboard.DController, {
});
