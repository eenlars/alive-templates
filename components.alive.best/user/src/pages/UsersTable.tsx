const UsersTable = () => {
  const tableData = [
    {
      id: 1,
      name: "Elena Rodriguez",
      email: "elena.rodriguez@corp.com",
      role: "Director",
      joinedAt: "2021-03-12",
    },
    {
      id: 2,
      name: "Thomas Bennett",
      email: "thomas.bennett@corp.com",
      role: "Specialist",
      joinedAt: "2022-06-18",
    },
    {
      id: 3,
      name: "Lisa Park",
      email: "lisa.park@corp.com",
      role: "Coordinator",
      joinedAt: "2023-01-09",
    },
    {
      id: 4,
      name: "Marcus White",
      email: "marcus.white@corp.com",
      role: "Specialist",
      joinedAt: "2023-08-25",
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-4xl px-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 whitespace-nowrap">
              <tr>
                <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Joined At
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td className="px-4 py-4 text-sm text-slate-900 font-medium">
                    {row.name}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                    {row.email}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                    {row.role}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                    {row.joinedAt}
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <button className="cursor-pointer text-blue-600 font-medium mr-4 hover:text-blue-800 transition-colors">
                      Edit
                    </button>
                    <button className="cursor-pointer text-red-600 font-medium hover:text-red-800 transition-colors">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UsersTable
