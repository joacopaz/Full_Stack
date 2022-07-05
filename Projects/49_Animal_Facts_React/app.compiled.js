(function () {
	function r(e, n, t) {
		function o(i, f) {
			if (!n[i]) {
				if (!e[i]) {
					var c = "function" == typeof require && require;
					if (!f && c) return c(i, !0);
					if (u) return u(i, !0);
					var a = new Error("Cannot find module '" + i + "'");
					throw ((a.code = "MODULE_NOT_FOUND"), a);
				}
				var p = (n[i] = { exports: {} });
				e[i][0].call(
					p.exports,
					function (r) {
						var n = e[i][1][r];
						return o(n || r);
					},
					p,
					p.exports,
					r,
					e,
					n,
					t
				);
			}
			return n[i].exports;
		}
		for (
			var u = "function" == typeof require && require, i = 0;
			i < t.length;
			i++
		)
			o(t[i]);
		return o;
	}
	return r;
})()(
	{
		1: [
			function (require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				var animals = (exports.animals = {
					dolphin: {
						image: "/images/dolphin.jpg",
						facts: [
							"Dolphins have been shown to give distinct names to each other!",
							"Dolphins are known to display their own culture!",
							"Dolphins have two stomachs!",
						],
					},
					lobster: {
						image: "/images/lobster.jpg",
						facts: [
							"Lobsters taste with their legs!",
							"Lobsters chew with their stomachs!",
							"Lobsters can live as long as 100 years.",
						],
					},
					starfish: {
						image: "/images/starfish.jpg",
						facts: [
							"Starfish can have up to 40 arms!",
							"Starfish have no brain and no blood!",
							"Starfish can regenerate their own arms!",
						],
					},
				});
			},
			{},
		],
		2: [
			function (require, module, exports) {
				"use strict";

				var _animals = require("./animals");

				var _reactDom = require("react-dom");

				var ReactDOM = _interopRequireWildcard(_reactDom);

				var _react = require("react");

				var React = _interopRequireWildcard(_react);

				function _interopRequireWildcard(obj) {
					if (obj && obj.__esModule) {
						return obj;
					} else {
						var newObj = {};
						if (obj != null) {
							for (var key in obj) {
								if (Object.prototype.hasOwnProperty.call(obj, key))
									newObj[key] = obj[key];
							}
						}
						newObj.default = obj;
						return newObj;
					}
				}

				var title = "";
				var background = React.createElement("img", {
					className: "background",
					alt: "ocean",
					src: "/images/ocean.jpg",
				});
				var images = [];
				for (var animal in _animals.animals) {
					images.push(
						React.createElement("img", {
							key: animal,
							className: "animal",
							alt: animal,
							src: _animals.animals[animal].image,
							"aria-label": animal,
							role: "button",
						})
					);
				}
				var animalFacts = React.createElement(
					"div",
					null,
					React.createElement(
						"h1",
						null,
						title === "" ? "Click an animal for a fun fact" : title
					),
					background,
					React.createElement("div", { className: "animals" }, images)
				);
				ReactDOM.render(animalFacts, document.getElementById("root"));
			},
			{ "./animals": 1, react: undefined, "react-dom": undefined },
		],
	},
	{},
	[2]
);
