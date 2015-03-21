var m = require('mithril')

module.exports = function (config) {
	var vm = {
		value: m.prop(''),
		toJSON: function () {
			return vm.value()
		}
	}
	var view = function () {
		return [
			m('div.form-group', [
				m('label.control-label.col-sm-2', config.label),
				m('div.col-sm-4', [
					m('textarea.form-control[rows=5]', { oninput: m.withAttr('value', vm.value), required: config.required }, vm.value())
				])
			])
		]
	}
	return { vm: vm, view: view, config: config, toJSON: vm.toJSON }
}
