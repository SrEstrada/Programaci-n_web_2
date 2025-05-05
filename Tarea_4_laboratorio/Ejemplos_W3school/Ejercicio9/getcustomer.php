<?php
$q = $_GET["q"];

$con = mysqli_connect("localhost", "root", "", "myDB");
if (!$con) {
  die('Could not connect: ' . mysqli_connect_error());
}

$sql = "SELECT * FROM customers WHERE CustomerID = '$q'";
$result = mysqli_query($con, $sql);

echo "<table border='1'>
<tr>
<th>Company</th>
<th>Contact</th>
<th>Address</th>
<th>City</th>
<th>Postal Code</th>
<th>Country</th>
</tr>";

while($row = mysqli_fetch_assoc($result)) {
  echo "<tr>";
  echo "<td>" . $row['CompanyName'] . "</td>";
  echo "<td>" . $row['ContactName'] . "</td>";
  echo "<td>" . $row['Address'] . "</td>";
  echo "<td>" . $row['City'] . "</td>";
  echo "<td>" . $row['PostalCode'] . "</td>";
  echo "<td>" . $row['Country'] . "</td>";
  echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
