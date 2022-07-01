# dreamstorm zadanie testowe

Treść zadania:
	
Za pomocą dowolnej biblioteki backendowej JS lub TS, stwórz serwer który będzie posiadał 1
endpoint o adresie ‘/update’, który będzie zapisywał aktualną liczbę wierszy w arkuszu, którą to

przekaże mu automat. Po wejściu na stronę główną serwera `/`, serwer powinien zwracać
zapisaną liczbę wierszy.

Rozwiązanie:

Jako że aplikacja wymaga jedynie liczby rekordów w google sheets 
zdecydowałem nie używać bazy danych tylko zapisywać wartość w pliku json.
Jeżeli zadanie wymagało by użycia bazy, ze względu na mały rozmiar, 
oraz prymitywny typ danych użyłbym rozwiązania SQL zamiast noSql.

Do upublicznienia url aplikacji użyłem ngrok
