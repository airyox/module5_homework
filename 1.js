const result = +prompt('������� ������ �����', '')
if (typeof +result !== 'number') {
  alert('���, �������, �� ��������')
} else if (isNaN(result % 2)) {
  alert('������, ������� �� �����')
} else if (result % 2 === 0) {
  alert('����� ������')
} else {
  alert('����� ��������')
} 