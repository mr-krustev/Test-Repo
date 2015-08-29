var appointment = (function () {
    var appointment = Object.create({});

    Object.defineProperty(appointment, "init", {
        value: function (startDate, endDate, appointmentName, description) {
            // TODO: Add validation
            description = description || '';
            appointmentName = appointmentName || "Appointment";

            this.startDate = startDate;
            this.endDate = endDate;
            this.appointmentName = appointmentName;
            this.description = description;
            return this;
        }
    });

    Object.defineProperty(appointment, "startDate", {
        get: function () {
            return this._startDate;
        },
        set: function (value) {
            // TODO: Add validation
            this._startDate = value;
        }
    });

    Object.defineProperty(appointment, "endDate", {
        get: function () {
            return this._endDate;
        },
        set: function (value) {
            // TODO: Add validation
            this._endDate = value;
        }
    });

    Object.defineProperty(appointment, "appointmentName", {
        get: function () {
            return this._appointmentName;
        },
        set: function (value) {
            // TODO: Add validation
            this._appointmentName = value;
        }
    });

    Object.defineProperty(appointment, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            // TODO: Add validation
            this._description = value;
        }
    });

    return event;
});

(function () {
    var scheduleAddController = (function () {
        var scheduleAddController = Object.create({});
        scheduleAddController.className += ' scheduleAddController';

        Object.defineProperty(scheduleAddController, 'renderUnusualEventAdding', {
            value: function () {
                var result = document.createDocumentFragment();
                result.appendChild(backButtonBox);
                result.appendChild(nameBox);
                result.appendChild(timeBox.cloneNode(true));
                result.appendChild(descriptionBox);
                result.appendChild(addAppointmentButton);
                return result;
            }
        });

        Object.defineProperty(scheduleAddController, 'renderUsualEventAdding', {
            value: function () {
                var result = document.createDocumentFragment();
                result.appendChild(backButtonBox);
                result.appendChild(appointmentBox);
                result.appendChild(durationBox);
                result.appendChild(addAppointmentButton);
                return result;
            }
        });

        Object.defineProperty(scheduleAddController, 'renderInitialState', {
            value: function () {
                var result = document.createDocumentFragment();
                result.appendChild(usualEventBox);
                result.appendChild(unusualEventBox);
                return result;
            }
        });

        // Add Usual event
        var usualEventBox = document.createElement('div');
        usualEventBox.setAttribute('id', 'usual-event-button-box');
        var usualEventButton = document.createElement('button');
        usualEventButton.setAttribute('id', 'usual-event-button');
        usualEventButton.className = 'btn';
        usualEventButton.innerHTML = 'Add Usual Event';
        usualEventBox.appendChild(usualEventButton);

        // Add Unusual event
        var unusualEventBox = document.createElement('div');
        unusualEventBox.setAttribute('id', 'unusual-event-button-box');
        var unusualEventButton = document.createElement('button');
        unusualEventButton.className = 'btn';
        unusualEventButton.setAttribute('id', 'unusual-event-button');
        unusualEventButton.innerHTML = 'Add Unusual Event';
        unusualEventBox.appendChild(unusualEventButton);

        //Back
        var backButtonBox = document.createElement('div');
        backButtonBox.setAttribute('id', 'controller-back-button-box');
        var backButton = document.createElement('button');
        backButton.setAttribute('id', 'controller-back-button');
        backButton.className += 'btn';
        backButton.innerHTML = 'Back';
        backButtonBox.appendChild(backButton);

        //Usual Event
        //Appointment list
        var appointmentBox = document.createElement('div');
        appointmentBox.setAttribute('id', 'controller-appointment-box');
        var appointmentLabel = document.createElement('div');
        appointmentLabel.setAttribute('for', 'appointment-dropdown-list');
        appointmentLabel.innerHTML = 'Appointment';
        appointmentBox.appendChild(appointmentLabel);
        var appointmentDropdown = document.createElement('select');
        appointmentDropdown.setAttribute('id', 'appointment-dropdown-list');

        var testOption = document.createElement('option');
        testOption.setAttribute('value', 'haircut');
        testOption.innerHTML = 'Haircut';
        appointmentDropdown.appendChild(testOption);
        appointmentBox.appendChild(appointmentDropdown);

        //Duration
        var durationBox = document.createElement('div');
        durationBox.setAttribute('id', 'controller-start-hour-box');
        var durationLabel = document.createElement('label');
        durationLabel.setAttribute('for', 'appointment-duration-input');
        durationLabel.innerHTML = 'Duration';
        durationBox.appendChild(durationLabel);
        var durationInput = document.createElement('input');
        durationInput.setAttribute('type', 'time');
        durationInput.setAttribute('id', 'appointment-duration-input');
        durationBox.appendChild(durationInput);

        //Unusual Event
        // Name
        var nameBox = document.createElement('div');
        nameBox.setAttribute('id', 'controller-name-box');
        var nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', 'appointment-name-input');
        nameLabel.innerHTML = 'Name:';
        nameBox.appendChild(nameLabel);
        var nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('id', 'appointment-name-input');
        nameBox.appendChild(nameInput);

        //Checkbox for custom event
        var isCustomEventCheckbox = document.createElement('input');
        isCustomEventCheckbox.setAttribute('type', 'checkbox');
        isCustomEventCheckbox.setAttribute('checked', 'checked');

        var timeBox = document.createDocumentFragment();
        // startHour
        var startHourBox = document.createElement('div');
        startHourBox.setAttribute('id', 'controller-start-hour-box');
        var startHourLabel = document.createElement('label');
        startHourLabel.setAttribute('for', 'appointment-start-hour-input');
        startHourLabel.innerHTML = 'From';
        startHourBox.appendChild(startHourLabel);
        var startHourInput = document.createElement('input');
        startHourInput.setAttribute('type', 'time');
        startHourInput.setAttribute('id', 'appointment-start-hour-input');
        startHourBox.appendChild(startHourInput);

        // endHour
        var endHourBox = document.createElement('div');
        endHourBox.setAttribute('id', 'controller-end-hour-box');
        var endHourLabel = document.createElement('label');
        endHourLabel.setAttribute('for', 'appointment-end-hour-input');
        endHourLabel.innerHTML = 'To';
        endHourBox.appendChild(endHourLabel);
        var endHourInput = document.createElement('input');
        endHourInput.setAttribute('type', 'time');
        endHourInput.setAttribute('id', 'appointment-end-hour-input');
        endHourBox.appendChild(endHourInput);

        timeBox.appendChild(startHourBox);
        timeBox.appendChild(endHourBox);

        // Description
        var descriptionBox = document.createElement('div');
        descriptionBox.setAttribute('id', 'controller-description-box');
        var descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'appointment-description-input');
        descriptionLabel.innerHTML = 'Description';
        descriptionBox.appendChild(descriptionLabel);
        var descriptionInput = document.createElement('input');
        descriptionInput.setAttribute('type', 'text');
        descriptionInput.setAttribute('id', 'appointment-description-input');
        descriptionBox.appendChild(descriptionInput);

        var addAppointmentButton = document.createElement('div');
        addAppointmentButton.className += 'btn';
        addAppointmentButton.innerHTML = 'Add Appointment';


        return scheduleAddController;
    });

    var controller = scheduleAddController();

    function showUnusualEventAdding() {
        var output = document.querySelector('.scheduleAddController');
        var result = controller.renderUnusualEventAdding();

        while (output.children.length != 0) {
            output.removeChild(output.firstElementChild);
        }
        output.appendChild(result);
        document.querySelector('#controller-back-button').addEventListener('click', showInitialState);
    }

    function showUsualEventAdding() {
        var output = document.querySelector('.scheduleAddController');
        var result = controller.renderUsualEventAdding();

        while (output.children.length != 0) {
            output.removeChild(output.firstElementChild);
        }
        output.appendChild(result);
        document.querySelector('#controller-back-button').addEventListener('click', showInitialState);
    }

    function showInitialState() {
        var output = document.querySelector('.scheduleAddController');
        var result = controller.renderInitialState();

        while (output.children.length != 0) {
            output.removeChild(output.firstElementChild);
        }
        output.appendChild(result);
        document.querySelector('#usual-event-button').addEventListener('click', showUsualEventAdding);
        document.querySelector('#unusual-event-button').addEventListener('click', showUnusualEventAdding);
    }

    showInitialState();
})();