var moment = require("../../moment-timezone");

exports["America/Mexico_City"] = {

	"2013" : function (t) {
		t.equal(moment("2013-04-07T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2013-04-07T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2013-04-07T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2013-04-07T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2013-10-27T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2013-10-27T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2013-10-27T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2013-10-27T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2013-04-07T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2013-04-07T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2013-04-07T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2013-04-07T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2013-10-27T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2013-10-27T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2013-10-27T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2013-10-27T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-04-06T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2014-04-06T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2014-04-06T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2014-04-06T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2014-10-26T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2014-10-26T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2014-10-26T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2014-10-26T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2014-04-06T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2014-04-06T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2014-04-06T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2014-04-06T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2014-10-26T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2014-10-26T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2014-10-26T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2014-10-26T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-04-05T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2015-04-05T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2015-04-05T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2015-04-05T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2015-10-25T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2015-10-25T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2015-10-25T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2015-10-25T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2015-04-05T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2015-04-05T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2015-04-05T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2015-04-05T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2015-10-25T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2015-10-25T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2015-10-25T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2015-10-25T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-04-03T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2016-04-03T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2016-04-03T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2016-04-03T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2016-10-30T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2016-10-30T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2016-10-30T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2016-10-30T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2016-04-03T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2016-04-03T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2016-04-03T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2016-04-03T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2016-10-30T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2016-10-30T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2016-10-30T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2016-10-30T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-04-02T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2017-04-02T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2017-04-02T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2017-04-02T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2017-10-29T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2017-10-29T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2017-10-29T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2017-10-29T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2017-04-02T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2017-04-02T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2017-04-02T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2017-04-02T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2017-10-29T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2017-10-29T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2017-10-29T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2017-10-29T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-04-01T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2018-04-01T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2018-04-01T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2018-04-01T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2018-10-28T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2018-10-28T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2018-10-28T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2018-10-28T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2018-04-01T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2018-04-01T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2018-04-01T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2018-04-01T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2018-10-28T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2018-10-28T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2018-10-28T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2018-10-28T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-04-07T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2019-04-07T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2019-04-07T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2019-04-07T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2019-10-27T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2019-10-27T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2019-10-27T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2019-10-27T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2019-04-07T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2019-04-07T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2019-04-07T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2019-04-07T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2019-10-27T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2019-10-27T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2019-10-27T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2019-10-27T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-04-05T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2020-04-05T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2020-04-05T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2020-04-05T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2020-10-25T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2020-10-25T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2020-10-25T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2020-10-25T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2020-04-05T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2020-04-05T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2020-04-05T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2020-04-05T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2020-10-25T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2020-10-25T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2020-10-25T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2020-10-25T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-04-04T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2021-04-04T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2021-04-04T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2021-04-04T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2021-10-31T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2021-10-31T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2021-10-31T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2021-10-31T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2021-04-04T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2021-04-04T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2021-04-04T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2021-04-04T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2021-10-31T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2021-10-31T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2021-10-31T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2021-10-31T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-04-03T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2022-04-03T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2022-04-03T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2022-04-03T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2022-10-30T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2022-10-30T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2022-10-30T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2022-10-30T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2022-04-03T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2022-04-03T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2022-04-03T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2022-04-03T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2022-10-30T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2022-10-30T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2022-10-30T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2022-10-30T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-04-02T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2023-04-02T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2023-04-02T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2023-04-02T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2023-10-29T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2023-10-29T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2023-10-29T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2023-10-29T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2023-04-02T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2023-04-02T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2023-04-02T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2023-04-02T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2023-10-29T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2023-10-29T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2023-10-29T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2023-10-29T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-04-07T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2024-04-07T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2024-04-07T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2024-04-07T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2024-10-27T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2024-10-27T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2024-10-27T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2024-10-27T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2024-04-07T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2024-04-07T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2024-04-07T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2024-04-07T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2024-10-27T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2024-10-27T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2024-10-27T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2024-10-27T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-04-06T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2025-04-06T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2025-04-06T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2025-04-06T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2025-10-26T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2025-10-26T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2025-10-26T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2025-10-26T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2025-04-06T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2025-04-06T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2025-04-06T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2025-04-06T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2025-10-26T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2025-10-26T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2025-10-26T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2025-10-26T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-04-05T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2026-04-05T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2026-04-05T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2026-04-05T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2026-10-25T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2026-10-25T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2026-10-25T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2026-10-25T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2026-04-05T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2026-04-05T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2026-04-05T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2026-04-05T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2026-10-25T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2026-10-25T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2026-10-25T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2026-10-25T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-04-04T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2027-04-04T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2027-04-04T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2027-04-04T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2027-10-31T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2027-10-31T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2027-10-31T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2027-10-31T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2027-04-04T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2027-04-04T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2027-04-04T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2027-04-04T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2027-10-31T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2027-10-31T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2027-10-31T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2027-10-31T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-04-02T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2028-04-02T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2028-04-02T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2028-04-02T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2028-10-29T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2028-10-29T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2028-10-29T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2028-10-29T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2028-04-02T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2028-04-02T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2028-04-02T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2028-04-02T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2028-10-29T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2028-10-29T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2028-10-29T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2028-10-29T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-04-01T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2029-04-01T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2029-04-01T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2029-04-01T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2029-10-28T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2029-10-28T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2029-10-28T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2029-10-28T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2029-04-01T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2029-04-01T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2029-04-01T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2029-04-01T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2029-10-28T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2029-10-28T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2029-10-28T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2029-10-28T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-04-07T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2030-04-07T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2030-04-07T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2030-04-07T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2030-10-27T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2030-10-27T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2030-10-27T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2030-10-27T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2030-04-07T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2030-04-07T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2030-04-07T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2030-04-07T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2030-10-27T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2030-10-27T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2030-10-27T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2030-10-27T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-04-06T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2031-04-06T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2031-04-06T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2031-04-06T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2031-10-26T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2031-10-26T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2031-10-26T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2031-10-26T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2031-04-06T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2031-04-06T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2031-04-06T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2031-04-06T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2031-10-26T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2031-10-26T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2031-10-26T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2031-10-26T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-04-04T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2032-04-04T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2032-04-04T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2032-04-04T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2032-10-31T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2032-10-31T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2032-10-31T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2032-10-31T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2032-04-04T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2032-04-04T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2032-04-04T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2032-04-04T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2032-10-31T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2032-10-31T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2032-10-31T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2032-10-31T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-04-03T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2033-04-03T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2033-04-03T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2033-04-03T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2033-10-30T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2033-10-30T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2033-10-30T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2033-10-30T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2033-04-03T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2033-04-03T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2033-04-03T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2033-04-03T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2033-10-30T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2033-10-30T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2033-10-30T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2033-10-30T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-04-02T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2034-04-02T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2034-04-02T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2034-04-02T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2034-10-29T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2034-10-29T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2034-10-29T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2034-10-29T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2034-04-02T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2034-04-02T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2034-04-02T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2034-04-02T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2034-10-29T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2034-10-29T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2034-10-29T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2034-10-29T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-04-01T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2035-04-01T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2035-04-01T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2035-04-01T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2035-10-28T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2035-10-28T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2035-10-28T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2035-10-28T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2035-04-01T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2035-04-01T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2035-04-01T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2035-04-01T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2035-10-28T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2035-10-28T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2035-10-28T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2035-10-28T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-04-06T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2036-04-06T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2036-04-06T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2036-04-06T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2036-10-26T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2036-10-26T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2036-10-26T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2036-10-26T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2036-04-06T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2036-04-06T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2036-04-06T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2036-04-06T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2036-10-26T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2036-10-26T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2036-10-26T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2036-10-26T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-04-05T07:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2037-04-05T07:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2037-04-05T08:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "03:00:00", "2037-04-05T08:00:00+00:00 should be 03:00:00 in America/Mexico_City");
		t.equal(moment("2037-10-25T06:59:59+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:59:59", "2037-10-25T06:59:59+00:00 should be 01:59:59 in America/Mexico_City");
		t.equal(moment("2037-10-25T07:00:00+00:00").tz("America/Mexico_City").format("HH:mm:ss"), "01:00:00", "2037-10-25T07:00:00+00:00 should be 01:00:00 in America/Mexico_City");

		t.equal(moment("2037-04-05T07:59:59+00:00").tz("America/Mexico_City").zone(), 360, "2037-04-05T07:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2037-04-05T08:00:00+00:00").tz("America/Mexico_City").zone(), 300, "2037-04-05T08:00:00+00:00 should be 300 minutes offset");
		t.equal(moment("2037-10-25T06:59:59+00:00").tz("America/Mexico_City").zone(), 300, "2037-10-25T06:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2037-10-25T07:00:00+00:00").tz("America/Mexico_City").zone(), 360, "2037-10-25T07:00:00+00:00 should be 360 minutes offset");

		t.done();
	}
};