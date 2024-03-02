const transactions = [
    {
        src: '../css/order/M9.jpg',
        name: '주문번호 DHBJ9SFSD',
        alias: 'iPhone 15',
        amount: '₩1,250,000',
        email: 'iPhone 15',
        status:'출고준비중',
        date: '2023-10-20T16:12:00Z',
    },
    {
        src: '../css/order/M10.jpg',
        name: '주문번호 SJGH2DZBF',
        alias: '@lilia',
        amount: '₩1,550,000',
        email: 'iPhone 15 Pro',
        date: '2023-10-22T13:12:00Z',
        status:'구매확정',
    },
    {
        src: '../css/order/M3.jpg',
        name: '주문번호 DFH2DZBF4',
        amount: '₩1,990,000',
        email: 'iMac',
        status: '구매확정',
        date: '2023-10-22T18:12:00Z',
    },
    {
        src: '../css/order/M4.jpg',
        name: '주문번호 9HFGH2DZB',
        amount: '₩1,390,000',
        email: 'MacBook Air M1 칩 탑재 13 모델',
        status: '주문취소',
        date: '2023-10-22T22:05:00Z',
    },
    {
        src: '../css/order/M5.jpg',
        name: '주문번호 GGGH2DZB',
        amount: '₩769,000',
        email: 'AirPods Max',
        status: '구매확정',
        date: '2023-10-24T19:05:00Z',
    },
    {
        src: '../css/order/M6.jpg',
        name: '주문번호 SDDGH2DZB',
        amount: '₩679,000',
        email: 'iPad(10세대)',
        status: '구매확정',
        date: '2023-10-25T22:05:00Z',
    },
    {
        src: '../css/order/M7.jpg',
        amount: '₩1,699,000',
        name: '주문번호 EREGH2DZB',
        email: 'Apple Watch Hermè',
        date: '2023-10-26T23:05:00Z',
        status: '구매확정',
    },
    {
        src: '../css/order/M8.jpg',
        name: '주문번호 8FGGH2DZC',
        amount: '₩1,149,000',
        email: 'Apple Watch Ultra ',
        status: '구매확정',
        date: '2023-10-29T20:05:00Z',
    },
    {
        src: '../css/order/M1.jpg',
        amount: '₩379,000',
        name: '주문번호 ASDGH2DZB',
        email: 'AirPods',
        date: '2023-10-30T22:05:00Z',
        status: '구매확정',
    },
    {
        src: '../css/order/M2.jpg',
        amount: '₩119,000',
        name: '주문번호 YTUGH2DZB',
        email: 'Apple Pencil',
        date: '2023-11-28T23:05:00Z',
        status: '구매확정',
    },
];

const tableWidget = document.getElementsByClassName('table-widget');

const itemsOnPage = 5;

const numberOfPages = Math.ceil(transactions.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

const mappedRecords = transactions
    .filter((_, i) => (
            ((start - 1) * itemsOnPage) < i + 1) &&
        (i+1 <= start * itemsOnPage)
    )
    .map(
        (teamMember) => {
            return `<tr>
                <td class="team-member-profile">
                    <img
                        src="${teamMember.src}"
                        alt="${teamMember.name}"
                    >
                    <span class="profile-info">
                        <span class="profile-info__name">
                            ${teamMember.name}
                        </span>
                        <span class=profile-info__alias>
                            ${teamMember.email}
                        </span>
                    </span>
                </td>
                <td>
                    ${teamMember.amount}
                </td>
                <td>
                    <span
                        class="status status--${teamMember.status}"
                    >
                        ${teamMember.status}
                    </span>
                </td>
                <td>
                    ${new Date(teamMember.date).toLocaleDateString('en-us',
                {
                    'weekday': 'short',
                    'year': 'numeric',
                    'month': 'short',
                    'day': 'numeric',
                    'hour': 'numeric',
                    'minute': 'numeric',
                }
            )}
                </td>
            </tr>`;
        }
    );


const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
    const pageNumber = i + 1;
    linkList.push(
        `<li>
            <a
                href="?page=${pageNumber}" 
                ${pageNumber == start ? 'class="active"' : ''} 
                title="page ${pageNumber}">
                ${pageNumber}
            </a>
        </li>`
    );
}

const table = DOMPurify.sanitize(`<table>
    <caption>
        주문
        <span class="table-row-count">(${transactions.length})</span>
    </caption> 
    <thead>
        <tr>
            <th>상품</th>
            <th>금액</th>
            <th>상태</th>
            <th>거래일</th>
        </tr>
    </thead>
    <tbody id="table-rows">
        ${mappedRecords.join('')}
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">
                <ul class="pagination">
                    <!--? generated pages -->
                    ${linkList.join('')}
                </ul>
            </td>
        </tr>
    </tfoot>
</table>`);

tableWidget[0].innerHTML = table;