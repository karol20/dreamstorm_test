# dreamstorm zadanie testowe

Tre�� zadania:
	
Za pomoc� dowolnej biblioteki backendowej JS lub TS, stw�rz serwer kt�ry b�dzie posiada� 1
endpoint o adresie �/update�, kt�ry b�dzie zapisywa� aktualn� liczb� wierszy w arkuszu, kt�r� to

przeka�e mu automat. Po wej�ciu na stron� g��wn� serwera `/`, serwer powinien zwraca�
zapisan� liczb� wierszy.

Rozwi�zanie:

Jako �e aplikacja wymaga jedynie liczby rekord�w w google sheets 
zdecydowa�em nie u�ywa� bazy danych tylko zapisywa� warto� w pliku json.
Je�eli zadanie wymaga�o by u�ycia bazy, ze wzgl�du na ma�y rozmiar danych 
u�y�bym rozwi�zanie SQL zamiast noSql.

Do upublicznienia url aplikacji u�y�e ngrok