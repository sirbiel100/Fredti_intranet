export type MenuItemType = {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    badge?: {
        variant: string;
        text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemType[];
};

const MENU_ITEMS: MenuItemType[] = [
    { key: 'navigation', label: 'Navigation', isTitle: true },
    {
        key: 'home',
        label: 'Home',
        isTitle: false,
        icon: 'uil-home-alt',
        url: '/intranet/home',
    },

    
    { key: 'intranet', label: 'Intranet', isTitle: true },
    
    {
        key: 'intranet-comunicacao',
        label: 'Comunicação',
        isTitle: false,
        
        icon: 'uil-comment-alt-lines',
        children: [
            {
                key: 'comunicacao-mural',
                label: 'Mural',
                url: '/intranet/apps/ecommerce/products',
                parentKey: 'intranet-comunicacao',
            },
            {
                key: 'comunicacao-contatos',
                label: 'Contatos',
                url: '/intranet/apps/ecommerce/products',
                parentKey: 'intranet-comunicacao',
            },
        ],
    },

    {
        key: 'intranet-seguranca',
        label: 'Segurança',
        isTitle: false,
        
        icon: 'uil-shield-check',
        children: [
            {
                key: 'seguranca-cftv',
                label: 'CFTV',
                url: '/intranet/apps/ecommerce/products',
                parentKey: 'intranet-seguranca',
            },
            {
                key: 'contatos-portaria',
                label: 'Portaria',
                url: '/intranet/apps/ecommerce/products',
                parentKey: 'intranet-seguranca',
            },
        ],
    },

    {
        key: 'intranet-agendamentos',
        label: 'Agendamentos',
        isTitle: false,
        
        icon: 'uil-calendar-alt',
        children: [
            {
                key: 'agendamentos-salas',
                label: 'Salas',
                url: '/intranet/apps/ecommerce/products',
                parentKey: 'intranet-agendamentos',
            },
            {
                key: 'contatos-veiculos',
                label: 'Veículos',
                url: '/intranet/apps/ecommerce/products',
                parentKey: 'intranet-agendamentos',
            },
        ],
    },
    {
        key: 'intranet-documentos',
        label: 'Documentos',
        isTitle: false,
        
        icon: 'uil-paperclip',
        children: [
            {
                key: 'documentos-rh',
                label: 'Políticas RH',
                url: '/intranet/apps/ecommerce/products',
                parentKey: 'intranet-documentos',
            },
        ],
    },
    {
        key: 'intranet-processos',
        label: 'Processos',
        isTitle: false,
        
        icon: 'uil-forward',
        children: [
            {
                key: 'processos-its',
                label: 'ITs',
                url: '/intranet/apps/ecommerce/products',
                parentKey: 'intranet-processos',
            },
            {
                key: 'processos-workflow',
                label: 'Workflow',
                url: '/intranet/apps/ecommerce/products',
                parentKey: 'intranet-processos',
            },
        ],
    },
    {
        key: 'intranet-dashboards',
        label: 'Dashboards',
        isTitle: false,
        
        icon: 'uil-graph-bar',
        children: [
            {
                key: 'dashboards-kpis',
                label: 'KPIs Vendas',
                url: '/intranet/apps/ecommerce/products',
                parentKey: 'intranet-dashboards',
            },
            {
                key: 'dashboards-produtividade',
                label: 'Produtividades',
                url: '/intranet/apps/ecommerce/products',
                parentKey: 'intranet-dashboards',
            },
        ],
    },
    {
        key: 'intranet-acessos',
        label: 'Acessos',
        isTitle: false,
        
        icon: 'uil-exit',
        children: [
            {
                key: 'acessos-erp',
                label: 'ERP',
                url: '/intranet/apps/ecommerce/products',
                parentKey: 'intranet-acessos',
            },
            {
                key: 'acessos-crm',
                label: 'CRM',
                url: '/intranet/apps/ecommerce/products',
                parentKey: 'intranet-acessos',
            },
        ],
    },
];

export { MENU_ITEMS };
