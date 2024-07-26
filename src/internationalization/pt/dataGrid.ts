export const dataGrid = {
	// Root
	noRowsLabel: 'Sem linhas',
	noResultsOverlayLabel: 'Nenhum resultado encontrado.',

	// Density selector toolbar button text
	toolbarDensity: 'Densidade',
	toolbarDensityLabel: 'Densidade',
	toolbarDensityCompact: 'Compacto',
	toolbarDensityStandard: 'Padrão',
	toolbarDensityComfortable: 'Confortável',

	// Columns selector toolbar button text
	toolbarColumns: 'Colunas',
	toolbarColumnsLabel: 'Selecionar colunas',

	// Filters toolbar button text
	toolbarFilters: 'Filtros',
	toolbarFiltersLabel: 'Mostrar filtros',
	toolbarFiltersTooltipHide: 'Ocultar filtros',
	toolbarFiltersTooltipShow: 'Mostrar filtros',
	toolbarFiltersTooltipActive: (count: number) =>
		count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,

	// Quick filter toolbar field
	toolbarQuickFilterPlaceholder: 'Pesquisar…',
	toolbarQuickFilterLabel: 'Pesquisar',
	toolbarQuickFilterDeleteIconLabel: 'Limpar',

	// Export selector toolbar button text
	toolbarExport: 'Exportar',
	toolbarExportLabel: 'Exportar',
	toolbarExportCSV: 'Baixar como CSV',
	toolbarExportPrint: 'Imprimir',
	toolbarExportExcel: 'Baixar como Excel',

	// Columns management text
	columnsManagementSearchTitle: 'Pesquisar',
	columnsManagementNoColumns: 'Sem colunas',
	columnsManagementShowHideAllText: 'Mostrar/Ocultar Todas',
	columnsManagementReset: 'Redefinir',

	// Filter panel text
	filterPanelAddFilter: 'Adicionar filtro',
	filterPanelRemoveAll: 'Remover todos',
	filterPanelDeleteIconLabel: 'Excluir',
	filterPanelLogicOperator: 'Operador lógico',
	filterPanelOperator: 'Operador',
	filterPanelOperatorAnd: 'E',
	filterPanelOperatorOr: 'Ou',
	filterPanelColumns: 'Colunas',
	filterPanelInputLabel: 'Valor',
	filterPanelInputPlaceholder: 'Valor do filtro',

	// Filter operators text
	filterOperatorContains: 'contém',
	filterOperatorEquals: 'é igual a',
	filterOperatorStartsWith: 'começa com',
	filterOperatorEndsWith: 'termina com',
	filterOperatorIs: 'é',
	filterOperatorNot: 'não é',
	filterOperatorAfter: 'é após',
	filterOperatorOnOrAfter: 'é em ou após',
	filterOperatorBefore: 'é antes',
	filterOperatorOnOrBefore: 'é em ou antes',
	filterOperatorIsEmpty: 'está vazio',
	filterOperatorIsNotEmpty: 'não está vazio',
	filterOperatorIsAnyOf: 'é qualquer um de',
	'filterOperator=': '=',
	'filterOperator!=': '!=',
	'filterOperator>': '>',
	'filterOperator>=': '>=',
	'filterOperator<': '<',
	'filterOperator<=': '<=',

	// Header filter operators text
	headerFilterOperatorContains: 'Contém',
	headerFilterOperatorEquals: 'É igual a',
	headerFilterOperatorStartsWith: 'Começa com',
	headerFilterOperatorEndsWith: 'Termina com',
	headerFilterOperatorIs: 'É',
	headerFilterOperatorNot: 'Não é',
	headerFilterOperatorAfter: 'É após',
	headerFilterOperatorOnOrAfter: 'É em ou após',
	headerFilterOperatorBefore: 'É antes',
	headerFilterOperatorOnOrBefore: 'É em ou antes',
	headerFilterOperatorIsEmpty: 'Está vazio',
	headerFilterOperatorIsNotEmpty: 'Não está vazio',
	headerFilterOperatorIsAnyOf: 'É qualquer um de',
	'headerFilterOperator=': 'É igual a',
	'headerFilterOperator!=': 'Não é igual a',
	'headerFilterOperator>': 'Maior que',
	'headerFilterOperator>=': 'Maior ou igual a',
	'headerFilterOperator<': 'Menor que',
	'headerFilterOperator<=': 'Menor ou igual a',

	// Filter values text
	filterValueAny: 'qualquer',
	filterValueTrue: 'verdadeiro',
	filterValueFalse: 'falso',

	// Column menu text
	columnMenuLabel: 'Menu',
	columnMenuShowColumns: 'Mostrar colunas',
	columnMenuManageColumns: 'Gerenciar colunas',
	columnMenuFilter: 'Filtrar',
	columnMenuHideColumn: 'Ocultar coluna',
	columnMenuUnsort: 'Desordenar',
	columnMenuSortAsc: 'Ordenar ASC',
	columnMenuSortDesc: 'Ordenar DESC',

	// Column header text
	columnHeaderFiltersTooltipActive: (count: number) =>
		count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,
	columnHeaderFiltersLabel: 'Mostrar filtros',
	columnHeaderSortIconLabel: 'Ordenar',

	// Rows selected footer text
	footerRowSelected: (count: number) =>
		count !== 1
			? `${count.toLocaleString()} linhas selecionadas`
			: `${count.toLocaleString()} linha selecionada`,

	// Total row amount footer text
	footerTotalRows: 'Total de Linhas:',

	// Total visible row amount footer text
	footerTotalVisibleRows: (visibleCount: number, totalCount: number) =>
		`${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,

	// Checkbox selection text
	checkboxSelectionHeaderName: 'Seleção por caixa de seleção',
	checkboxSelectionSelectAllRows: 'Selecionar todas as linhas',
	checkboxSelectionUnselectAllRows: 'Desmarcar todas as linhas',
	checkboxSelectionSelectRow: 'Selecionar linha',
	checkboxSelectionUnselectRow: 'Desmarcar linha',

	// Boolean cell text
	booleanCellTrueLabel: 'sim',
	booleanCellFalseLabel: 'não',

	// Actions cell more text
	actionsCellMore: 'mais',

	// Column pinning text
	pinToLeft: 'Fixar à esquerda',
	pinToRight: 'Fixar à direita',
	unpin: 'Desfixar',

	// Tree Data
	treeDataGroupingHeaderName: 'Grupo',
	treeDataExpand: 'ver filhos',
	treeDataCollapse: 'ocultar filhos',

	// Grouping columns
	groupingColumnHeaderName: 'Grupo',
	groupColumn: (name: string) => `Agrupar por ${name}`,
	unGroupColumn: (name: string) => `Parar de agrupar por ${name}`,

	// Master/detail
	detailPanelToggle: 'Alternar painel de detalhes',
	expandDetailPanel: 'Expandir',
	collapseDetailPanel: 'Recolher',

	// Used core components translation keys
	MuiTablePagination: {},

	// Row reordering text
	rowReorderingHeaderName: 'Reordenar linhas',

	// Aggregation
	aggregationMenuItemHeader: 'Agregação',
	aggregationFunctionLabelSum: 'soma',
	aggregationFunctionLabelAvg: 'média',
	aggregationFunctionLabelMin: 'mínimo',
	aggregationFunctionLabelMax: 'máximo',
	aggregationFunctionLabelSize: 'tamanho',
}
