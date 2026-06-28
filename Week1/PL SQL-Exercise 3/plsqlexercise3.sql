-- pl/sql exercise 3
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN

    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;

END;
BEGIN
    ProcessMonthlyInterest;
END;
SELECT AccountID,
       CustomerID,
       AccountType,
       Balance
FROM Accounts
ORDER BY AccountID;

-- scenario 2

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus
(
    p_Department IN VARCHAR2,
    p_Bonus IN NUMBER
)
AS
BEGIN

    UPDATE Employees
    SET Salary = Salary + (Salary * p_Bonus / 100)
    WHERE Department = p_Department;

    COMMIT;

END;
BEGIN
    UpdateEmployeeBonus('IT', 10);
END;
SELECT EmployeeID,
       Name,
       Department,
       Salary
FROM Employees
ORDER BY EmployeeID;

-- scenario 3

CREATE OR REPLACE PROCEDURE TransferFunds
(
    p_FromAccount IN NUMBER,
    p_ToAccount IN NUMBER,
    p_Amount IN NUMBER
)
AS
    v_Balance NUMBER;
BEGIN

    SELECT Balance
    INTO v_Balance
    FROM Accounts
    WHERE AccountID = p_FromAccount;

    IF v_Balance >= p_Amount THEN

        UPDATE Accounts
        SET Balance = Balance - p_Amount
        WHERE AccountID = p_FromAccount;

        UPDATE Accounts
        SET Balance = Balance + p_Amount
        WHERE AccountID = p_ToAccount;

        COMMIT;

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');

    END IF;

END;
BEGIN
    TransferFunds(1, 2, 200);
END;
SELECT AccountID,
       AccountType,
       Balance
FROM Accounts
ORDER BY AccountID;