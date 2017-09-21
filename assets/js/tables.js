
$.get("/api/displayTables", function(data) {
      for (var i = 0; i < data.length; i++) {
        var wellSection = $("<div>");
        wellSection.attr("id", "table-well-" + i);
        welSection.addClass("well well-lg");
        $("#tableSection").append(wellSection);

        $("#tabel-well-" + i).append("<h3>Table 1:" + data[i].name + "</h3>");
        $("#tabel-well-" + i).append("<h3>Table 2: " + data[i].name + "</h3>");
        $("#tabel-well-" + i).append("<h3>Table 3: " + data[i].name + "</h3>");
        $("#tabel-well-" + i).append("<h3>Table 4: " + data[i].name + "</h3>");
      }
    });